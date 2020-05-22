import { createAction, props } from "@ngrx/store";

export const selectTag = createAction(
  "[App] Select Tag",
  props<{ tag: string }>()
);
