import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { stackExchangeBaseUrl } from 'src/constants';
import { OrderBy, QuestionsSortBy } from 'src/shared/stackExchangeModels';
import { of } from 'rxjs';
import { QuestionsQuery } from './questions.controller';
import { StackExchangeAppKey } from 'src/secrets';
import { QuestionsApiQueryFilter } from 'src/shared/stackExchangeConstants';
import { TimeRangeHelper } from 'src/shared/timeRangeHelper';

@Injectable()
export class QuestionsService {
  constructor(private readonly httpService: HttpService) {}

  async getQuestionsByTags(questionsQuery: QuestionsQuery) {
    const url: string = `${stackExchangeBaseUrl}/questions`;
    const { fromDate, toDate } = TimeRangeHelper.lastWeekTimeRange();
    return this.httpService
      .get(url, {
        params: {
          page: questionsQuery.page,
          pagesize: questionsQuery.pagesize,
          order: questionsQuery.order,
          sort: questionsQuery.sort,
          tagged: questionsQuery.tags,
          fromDate,
          toDate,
          site: 'stackoverflow',
          key: StackExchangeAppKey,
          filter: QuestionsApiQueryFilter,
        },
      })
      .pipe(
        map(res => res.data),
        catchError(err => of({ err })),
      )
      .toPromise();
  }

  async getQuestionsByIds(ids: string, questionsQuery: QuestionsQuery) {
    const url: string = `${stackExchangeBaseUrl}/questions/${ids}`;
    const { fromDate, toDate } = TimeRangeHelper.lastDayTimeRange();
    return this.httpService
      .get(url, {
        params: {
          page: questionsQuery.page,
          pagesize: questionsQuery.pagesize,
          order: questionsQuery.order,
          sort: questionsQuery.sort,
          fromDate,
          toDate,
          site: 'stackoverflow',
          key: StackExchangeAppKey,
          filter: QuestionsApiQueryFilter,
        },
      })
      .pipe(
        map(res => res.data),
        catchError(err => of({ err })),
      )
      .toPromise();
  }

  async getAnswersByQuestionIds(
    ids: string,
    order = OrderBy.Desc,
    sort = QuestionsSortBy.Activity,
  ) {
    const url: string = `${stackExchangeBaseUrl}/questions/${ids}/answers`;
    const { fromDate, toDate } = TimeRangeHelper.lastDayTimeRange();
    return this.httpService
      .get(url, {
        params: {
          order,
          sort,
          site: 'stackoverflow',
          key: StackExchangeAppKey,
          filter: QuestionsApiQueryFilter,
        },
      })
      .pipe(
        map(response => response.data),
        catchError(err => of({ err })),
      )
      .toPromise();
  }
}
