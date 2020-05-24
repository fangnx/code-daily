import { createAction, props } from "@ngrx/store";
import { Tag, QuestionsQuery, Question } from "../app.model";

export const selectTag = createAction(
  "[App] Select Tag",
  props<{ tag: Tag }>()
);

export const unselectTag = createAction(
  "[App] Unselect Tag",
  props<{ tag: Tag }>()
);

export const fetchQuestions = createAction(
  "[App] Fetch Questions"
  // props<{ query: QuestionsQuery }>()
);

export const fetchQuestionsSuccess = createAction(
  "[App] Fetch Questions Success",
  props<{ questions: Question[] }>
)
