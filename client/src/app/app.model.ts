export interface Question {
  question_id: string;
}

export interface Tag {
  name: string;
  count: number;
  has_synonyms: boolean;
}

export enum QuestionsSortBy {
  Activity = "activity",
  Votes = "votes",
  Creation = "creation",
}

export enum TagsSortBy {
  Popular = "popular",
  Activity = "activity",
  Name = "name",
}

export enum OrderBy {
  Desc = "desc",
  Asc = "asc",
}

export interface QuestionsQuery {
  tags?: string;
  order?: OrderBy;
  sort?: QuestionsSortBy;
}
