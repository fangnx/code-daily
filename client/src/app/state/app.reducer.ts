import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Question, Tag } from "../app.model";
import * as AppActions from "./app.actions";

export interface AppState extends EntityState<Question> {
  tags: Array<string>;
  selectedTags: Set<Tag>;
  questions: Array<Question>;
}

export const adapter: EntityAdapter<Question> = createEntityAdapter<Question>({
  selectId: (question: Question) => question.question_id,
  sortComparer: false,
});

export const initialState: AppState = adapter.getInitialState(<AppState>{
  tags: [],
  selectedTags: new Set(),
});

export const appReducer = createReducer(
  initialState,
  on(AppActions.selectTag, (state, { tag }) => ({
    ...state,
    selectedTags: state.selectedTags.add(tag),
  })),
  on(AppActions.unselectTag, (state, { tag }) => {
    state.selectedTags.delete(tag);
    return {
      ...state,
    };
  }),
  on(AppActions.fetchQuestionsSuccess, (state, { questions }) => {
    console.log(questions);
    return { ...state, questions: questions };
  })
);
