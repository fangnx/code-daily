import { createAction, props } from "@ngrx/store";
import { Tag, Question } from "../models/stackExchange.model";
import { UserAuth, User } from "../models/user.model";

export const selectTag = createAction(
  "[App] Select Tag",
  props<{ tag: Tag }>()
);

export const unselectTag = createAction(
  "[App] Unselect Tag",
  props<{ tag: Tag }>()
);

export const fetchQuestions = createAction(
  "[App] Fetch Questions",
  props<{ tag: Tag }>()
);

export const fetchQuestionsSuccess = createAction(
  "[App] Fetch Questions Success",
  props<{ questions: Question[] }>()
);

export const loginUser = createAction(
  "[App] Log In User",
  props<{ userAuth: UserAuth }>()
);

export const logoutUser = createAction("[App] Log Out User");

export const fetchCurrentUserAuth = createAction(
  "[App] Fetch Current User Auth"
);

export const fetchCurrentUserAuthSuccess = createAction(
  "[App] Fetch Current User Auth Success",
  props<{ user: User }>()
);

export const addFavoriteTagToUser = createAction(
  "[App] Add Favorite Tag to User",
  props<{ tag: string }>()
);

export const removeFavoriteTagFromUser = createAction(
  "[App] Remove Favorite Tag from User",
  props<{ tag: string }>()
);
