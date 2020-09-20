import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { HttpClient, HttpParams } from "@angular/common/http";
import {
  PocketRequestToken,
  PocketAccessToken,
  AddItemToPocketDto,
} from "../models/pocket.model";
import { Observable } from "rxjs";

@Injectable()
export class PocketService {
  constructor(
    private httpClient: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public getRequestToken(): Promise<PocketRequestToken> {
    return this.httpClient
      .get<PocketRequestToken>("api/pocket/request_token")
      .toPromise();
  }

  public async redirectToPocket(): Promise<void> {
    const requestToken: PocketRequestToken = await this.getRequestToken();
    if (!requestToken || !requestToken.code) {
      return;
    }

    let url = new URL("http://getpocket.com/auth/authorize");
    url.searchParams.append("request_token", requestToken.code);
    url.searchParams.append(
      "redirect_uri",
      `${window.location.origin}/user/pocket/${requestToken.code}`
    );
    this.document.location.href = url.toString();
  }

  public authorize(
    userEmail: string,
    requestToken: string
  ): Promise<PocketAccessToken> {
    let params = new HttpParams();
    params = params.append("email", userEmail);
    params = params.append("request_token", requestToken);

    return this.httpClient
      .get<PocketAccessToken>("api/pocket/authorize", { params })
      .toPromise();
  }

  public addItemToPocket(
    accessToken: string,
    url: string,
    title?: string,
    tags?: string
  ): Observable<boolean> {
    const dto: AddItemToPocketDto = {
      access_token: accessToken,
      url,
      title,
      tags,
    };
    return this.httpClient.post<boolean>("api/pocket/add", dto);
  }
}
