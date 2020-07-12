export enum QuestionsSortBy {
  Activity = 'activity',
  Votes = 'votes',
  Creation = 'creation',
}

export enum TagsSortBy {
  Popular = 'popular',
  Activity = 'activity',
  Name = 'name',
}

export enum OrderBy {
  Desc = 'desc',
  Asc = 'asc',
}

export class BaseQuery {
  page: number;
  pagesize: number;
}
