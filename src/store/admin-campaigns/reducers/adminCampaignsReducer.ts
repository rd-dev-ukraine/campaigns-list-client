import { initialStore } from "../../initialStore";
import { Action } from "redux";
import {
  setAdminCampaignsLoadingAction,
  setAdminCampaignsDataAction
} from "../actions";

export function adminCampaignsReducer(state = initialStore, action: Action) {
  if (setAdminCampaignsLoadingAction.match(action)) {
    return {
      ...state,
      loading: action.payload.loading
    };
  }

  if (setAdminCampaignsDataAction.match(action)) {
    return {
      ...state,
      items: action.payload.items
    };
  }

  return state;
}
