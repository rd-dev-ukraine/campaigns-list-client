import { Action } from "redux";
import { initialStore } from "../../initialStore";
import {
  setCampaignListLoadingAction,
  setCampaignsListDataAction
} from "../actions";

export function campaignReducer(
  state = initialStore,
  action: Action
) {
  if (setCampaignListLoadingAction.match(action)) {
    return {
      ...state,
      loading: action.payload.loading
    };
  }

  if (setCampaignsListDataAction.match(action)) {
    return {
      ...state,
      items: action.payload.items
    };
  }

  return state;
}
