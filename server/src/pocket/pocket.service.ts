import { Injectable, HttpService } from '@nestjs/common';
import { pocketApiBaseUrl } from 'src/constants';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class PocketService {
  constructor(private readonly httpService: HttpService) {}

  private get httpHeaders() {
    return {
      'Content-Type': 'application/json',
      'X-Accept': 'application/json',
    };
  }

  public obtainRequestToken() {
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

  public obtainAccessToken(requestToken: string) {
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
}
