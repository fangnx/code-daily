import { ActionReducer, Action } from "@ngrx/store";

function getSavedItem(localStorageKey: string): Object {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

const userAuthStorageKey: string = "userAuth";

export function storageMetaReducer<S, A extends Action = Action>(
  reducer: ActionReducer<S, A>
) {
  // Only trigger after reloading the page.
  let onInit = true;
  return function (state: S, action: A): S {
    const nextState = reducer(state, action);
    if (onInit) {
      onInit = false;
      const userAuthItem = getSavedItem(userAuthStorageKey);
      nextState["app"]["userAuth"] = userAuthItem;
      return nextState;
    }
    return nextState;
  };
}
