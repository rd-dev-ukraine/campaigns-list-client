import { Action } from "redux";

export const makeAction = function<ActionData, ActionType = string>(type: ActionType) {
  function creator(payload?: ActionData) {
    return { type, ...(payload ? { payload } : {}) };
  }

  creator.match = function(
    action: Action
  ): action is Action & { payload: ActionData } {
    return action.type === type;
  };

  creator.type = type;

  return creator;
};
