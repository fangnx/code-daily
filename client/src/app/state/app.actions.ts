import { createAction, props } from "@ngrx/store";
import { Tag, Question } from "../app.model";

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
  props<{ user: any }>()
);

export const logoutUser = createAction("[App] Log Out User");
