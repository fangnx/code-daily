import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { stackExchangeBaseUrl } from 'src/constants';
import { convertIdsToString } from 'src/utils';

@Injectable()
export class QuestionsService {
  constructor(private readonly httpService: HttpService) {}

  async getQuestionsByIds(ids: string) {
    const url: string = `${stackExchangeBaseUrl}$/questions/${ids}`;
    return this.httpService
      .get(url, {
        params: {
          site: 'stackoverflow',
        },
      })
      .pipe(map(response => response.data))
      .toPromise();
  }

  async getAnswersByQuestionIds(ids: string) {
    const url: string = `${stackExchangeBaseUrl}/questions/${ids}/answers`;
    return this.httpService
      .get(url, {
        params: {
          site: 'stackoverflow',
        },
      })
      .pipe(map(response => response.data))
      .toPromise();
  }
}
