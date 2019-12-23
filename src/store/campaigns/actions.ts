import { makeAction } from "../../utils/makeAction";
import { ICampaign } from "../types";

export const FETCH_CAMPAIGN_LIST_ACTION = "FETCH_CAMPAIGN_LIST_ACTION";

export const fetchCampaignListAction = makeAction(FETCH_CAMPAIGN_LIST_ACTION);

export const SET_CAMPAIGN_LIST_LOADING_ACTION =
  "SET_CAMPAIGN_LIST_LOADING_ACTION";

export const setCampaignListLoadingAction = makeAction<{ loading: boolean }>(
  SET_CAMPAIGN_LIST_LOADING_ACTION
);

export const SET_CAMPAIGN_LIST_DATA = "SET_CAMPAIGN_LIST_DATA";

export const setCampaignsListDataAction = makeAction<{ items: ICampaign[] }>(
  SET_CAMPAIGN_LIST_DATA
);
