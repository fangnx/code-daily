import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { stackExchangeBaseUrl } from 'src/constants';
import { OrderBy, SortBy } from 'src/shared/stackExchangeModels';
import { of } from 'rxjs';

@Injectable()
export class QuestionsService {
  constructor(private readonly httpService: HttpService) {}

  async getQuestionsByTags(
    tagged: string[],
    order = OrderBy.Desc,
    sort = SortBy.Activity,
  ) {
    const url: string = `${stackExchangeBaseUrl}/questions/`;
    console.log(tagged);
    return this.httpService
      .get(url, {
        params: {
          order,
          sort,
          tagged: '["javascript"]',
          site: 'stackoverflow',
        },
      })
      .pipe(map(res => res.data))
      .toPromise();
  }

  async getQuestionsByIds(
    ids: string,
    order = OrderBy.Desc,
    sort = SortBy.Activity,
  ) {
    const url: string = `${stackExchangeBaseUrl}/questions/${ids}`;
    return this.httpService
      .get(url, {
        params: {
          order,
          sort,
          site: 'stackoverflow',
        },
      })
      .pipe(
        map(res => res.data),
        catchError(error => of({ error })),
      )
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
      .pipe(
        map(response => response.data),
        catchError(error => of({ error })),
      )
      .toPromise();
  }
}
