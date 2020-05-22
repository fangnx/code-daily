import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Question } from "../app.model";
import * as AppActions from "./app.actions";

export interface AppState extends EntityState<Question> {
  tags: Array<string>;
  selectedTags: Array<string>;
}

export const adapter: EntityAdapter<Question> = createEntityAdapter<Question>({
  selectId: (question: Question) => question.question_id,
  sortComparer: false,
});

export const initialState: AppState = adapter.getInitialState(<AppState>{
  tags: [],
  selectedTags: [],
});

export const reducer = createReducer(
  initialState,
  on(AppActions.selectTag, (state, { tag }) => ({
    ...state,
    selectedTags: [...state.selectedTags, tag],
  }))
);
