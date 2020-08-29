import { Injectable, HttpService } from '@nestjs/common';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OrderBy, QuestionsSortBy } from '../shared/stackExchangeModels';
import { QuestionsQuery } from './questions.controller';
import { stackExchangeBaseUrl } from '../constants';
import { StackExchangeAppKey } from '../secrets';
import { QuestionsApiQueryFilter } from '../shared/stackExchangeConstants';
import { TimeRangeHelper } from '../shared/timeRangeHelper';

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

  async getRandomQuestionsByTags(questionsQuery: QuestionsQuery) {
    const url: string = `${stackExchangeBaseUrl}/questions`;
    const { fromDate, toDate } = TimeRangeHelper.randomWeekTimeRange();

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
