import { ActionReducer, Action } from "@ngrx/store";

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedItem(localStorageKey: string): Object {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

const userStorageKey: string = "user";

export function storageMetaReducer<S, A extends Action = Action>(
  reducer: ActionReducer<S, A>
) {
  // Only trigger after reloading the page.
  let onInit = true;
  return function (state: S, action: A): S {
    const nextState = reducer(state, action);
    if (onInit) {
      onInit = false;
      const userItem = getSavedItem(userStorageKey);
      nextState["app"]["userAuth"] = userItem;
      return nextState;
    }
    return nextState;
  };
}
