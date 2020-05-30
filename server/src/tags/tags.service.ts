import { HttpService, Injectable } from '@nestjs/common';
import { stackExchangeBaseUrl } from 'src/constants';
import { map, catchError } from 'rxjs/operators';
import { TagsQuery } from './tags.controller';
import { of } from 'rxjs';
import { StackExchangeAppKey } from '../secrets';

@Injectable()
export class TagsService {
  constructor(private readonly httpService: HttpService) {}

  async getTags(tagsQuery: TagsQuery) {
    const url: string = `${stackExchangeBaseUrl}/tags`;
    return this.httpService
      .get(url, {
        params: {
          page: tagsQuery.page,
          pagesize: tagsQuery.pagesize,
          order: tagsQuery.order,
          sort: tagsQuery.sort,
          site: 'stackoverflow',
          key: StackExchangeAppKey,
        },
      })
      .pipe(
        map(res => res.data),
        catchError(err => of({ err })),
      )
      .toPromise();
  }

  async getRelatedTags(tags: string[], tagsQuery: TagsQuery) {
    const url: string = `${stackExchangeBaseUrl}/${tags}/related`;
    return this.httpService
      .get(url, {
        params: {
          page: tagsQuery.page,
          pagesize: tagsQuery.pagesize,
          site: 'stackoverflow',
          key: StackExchangeAppKey,
        },
      })
      .pipe(
        map(res => res.data),
        catchError(err => of({ err })),
      )
      .toPromise();
  }
}
