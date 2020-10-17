import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

export const selectAppState = createFeatureSelector<AppState>("app");

export const selectTags = createSelector(
  selectAppState,
  (state: AppState) => state.tags
);

export const selectSelectedTag = createSelector(
  selectAppState,
  (state: AppState) => state.selectedTag
);

export const selectPage = createSelector(
  selectAppState,
  (state: AppState) => state.page
);

export const selectQuestions = createSelector(
  selectAppState,
  (state: AppState) => state.questions
);

export const selectUserAuth = createSelector(
  selectAppState,
  (state: AppState) => state.userAuth
);

export const selectUser = createSelector(
  selectAppState,
  (state: AppState) => state.user
);
