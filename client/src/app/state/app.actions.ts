import { createAction, props } from "@ngrx/store";
import { Question } from "../models/stackExchange.model";
import { UserAuth, User } from "../models/user.model";

export const selectTag = createAction(
  "[App] Select Tag",
  props<{ tag: string }>()
);

export const unselectTag = createAction(
  "[App] Unselect Tag",
  props<{ tag: string }>()
);

export const fetchQuestions = createAction(
  "[App] Fetch Questions",
  props<{ tag: string; fetchRandom?: boolean }>()
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

export const fetchCurrentUser = createAction("[App] Fetch Current User");

export const fetchCurrentUserSuccess = createAction(
  "[App] Fetch Current User Success",
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

export const subscribeToTag = createAction(
  "[App] Subscribe to Tag",
  props<{ tag: string }>()
);

export const unsubscribeToTag = createAction(
  "[App] Unsubscribe to Tag",
  props<{ tag: string }>()
);
