import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Question, Tag } from "../models/stackExchange.model";
import { UserAuth, User } from "../models/user.model";
import * as AppActions from "./app.actions";

export interface AppState extends EntityState<Question> {
  tags: Array<string>;
  selectedTag: string;
  questions: Array<Question>;
  userAuth: UserAuth;
  user: User;
}

export const adapter: EntityAdapter<Question> = createEntityAdapter<Question>({
  selectId: (question: Question) => question.question_id,
  sortComparer: false,
});

export const initialState: AppState = adapter.getInitialState(<AppState>{
  tags: [],
  selectedTag: null,
  userAuth: null,
  user: null,
});

export const appReducer = createReducer(
  initialState,
  on(AppActions.selectTag, (state, { tag }) => ({
    ...state,
    selectedTag: tag,
  })),
  on(AppActions.fetchQuestionsSuccess, (state, { questions }) => {
    return { ...state, questions: questions };
  }),
  on(AppActions.loginUser, (state, { userAuth }) => ({
    ...state,
    userAuth,
  })),
  on(AppActions.logoutUser, (state) => ({
    ...state,
    userAuth: null,
    user: null,
  })),
  on(AppActions.fetchCurrentUserSuccess, (state, { user }) => ({
    ...state,
    user,
  }))
);
