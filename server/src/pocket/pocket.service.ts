import { Injectable, HttpService } from '@nestjs/common';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PocketAccessToken, PocketRequestToken } from './pocket.interface';
import { UsersService } from '../users/users.service';
import { pocketApiBaseUrl } from '../constants';

@Injectable()
export class PocketService {
  constructor(
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
  ) {}

  private get httpHeaders() {
    return {
      'Content-Type': 'application/json',
      'X-Accept': 'application/json',
    };
  }

  public obtainRequestToken(): Promise<PocketRequestToken> {
    const url = `${pocketApiBaseUrl}/v3/oauth/request`;
    const dto = {
      consumer_key: process.env.POCKET_CONSUMER_KEY,
      redirect_uri: process.env.POCKET_REDIRECT_URL,
    };

    return this.httpService
      .post(url, JSON.stringify(dto), {
        headers: this.httpHeaders,
      })
      .pipe(
        map(res => res.data),
        catchError(err => of({ err })),
      )
      .toPromise();
  }

  private obtainAccessToken(requestToken: string): Promise<PocketAccessToken> {
    const url = `${pocketApiBaseUrl}/v3/oauth/authorize`;
    const dto = {
      consumer_key: process.env.POCKET_CONSUMER_KEY,
      code: requestToken,
    };

    return this.httpService
      .post(url, JSON.stringify(dto), {
        headers: this.httpHeaders,
      })
      .pipe(
        map(res => res.data),
        catchError(err => of({ err })),
      )
      .toPromise();
  }

  public async connectUserWithPocket(
    userEmail: string,
    requestToken: string,
  ): Promise<void> {
    const accessToken: PocketAccessToken = await this.obtainAccessToken(
      requestToken,
    );

    if (!accessToken || !accessToken.access_token) {
      return;
    }
    return this.usersService.addPocketTokenToUser(
      userEmail,
      accessToken.access_token,
      accessToken.username,
    );
  }
}
