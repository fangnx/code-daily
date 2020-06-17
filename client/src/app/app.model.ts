export interface Question {
  question_id: string;
  answers?: Array<Answer>;
  answer_count: number;
  body: string;
  body_markdown: string;
  creation_date: number;
  down_vote_count: number;
  last_edit_date: number;
  owner: Owner;
  title: string;
  up_vote_count: number;
  view_count: number;
}

export interface Answer {
  body: string;
  body_markdown: string;
  creation_date: number;
  down_vote_count: number;
  last_edit_date: number;
  owner: Owner;
  up_vote_count: number;
}

export interface Tag {
  name: string;
  count: number;
  has_synonyms: boolean;
}

export interface Owner {
  display_name: string;
  profile_image: string;
  reputation: number;
}

export enum QuestionsSortBy {
  Activity = "activity",
  Votes = "votes",
  Creation = "creation",
  Week = "week",
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
  page?: number;
  pagesize: number;
}

export interface CreateUserDto {
  email: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}
