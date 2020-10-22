import 'dotenv/config';
import { HttpService, Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TagsQuery } from './tags.controller';
import { stackExchangeBaseUrl } from '../constants';
import { Tag } from '../shared/stackExchangeModels';

@Injectable()
export class TagsService {
  private apiKey: string;

  constructor(private readonly httpService: HttpService) {
    this.apiKey = process.env.STACK_EXCHANGE_APP_KEY;
  }

  public getDefaultTagNames(): string[] {
    return [
      'java',
      'python',
      'javascript',
      'android',
      'ios',
      'c',
      'c#',
      'c++',
      'sql',
      'mongodb',
      'r',
      'tensorflow',
      'spring',
      'node.js',
      'express',
      'typescript',
      'reactjs',
      'angular',
      'vue.js',
      'go',
      'php',
      'laravel',
      'ruby',
      'ruby-on-rails',
      'django',
      'swift',
      'objective-c',
      'regex',
      'git',
      'unix',
      'shell',
      'bash',
      'database',
    ];
  }

  public async getPopularTags(tagsQuery: TagsQuery): Promise<Tag[]> {
    const url: string = `${stackExchangeBaseUrl}/tags`;
    return this.httpService
      .get(url, {
        params: {
          page: tagsQuery.page,
          pagesize: tagsQuery.pagesize,
          order: tagsQuery.order,
          sort: tagsQuery.sort,
          site: 'stackoverflow',
          key: this.apiKey,
        },
      })
      .pipe(
        map(res => res.data),
        catchError(err => of({ err })),
      )
      .toPromise();
  }

  public async getRelatedTags(
    tags: string[],
    tagsQuery: TagsQuery,
  ): Promise<Tag[]> {
    const url: string = `${stackExchangeBaseUrl}/${tags}/related`;
    return this.httpService
      .get(url, {
        params: {
          page: tagsQuery.page,
          pagesize: tagsQuery.pagesize,
          site: 'stackoverflow',
          key: this.apiKey,
        },
      })
      .pipe(
        map(res => res.data),
        catchError(err => of({ err })),
      )
      .toPromise();
  }
}
