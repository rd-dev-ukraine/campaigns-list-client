import { makeAction } from "../../utils/makeAction";
import { ICampaign } from "../types";

export const SET_ADMIN_CAMPAIGNS_LOADING = 'SET_ADMIN_CAMPAIGNS_LOADING';

export const setAdminCampaignsLoadingAction = makeAction<{loading: boolean}>(SET_ADMIN_CAMPAIGNS_LOADING);

export const SET_ADMIN_CAMPAIGNS_DATA = 'SET_ADMIN_CAMPAIGNS_DATA';

export const setAdminCampaignsDataAction = makeAction<{items: ICampaign[]}>(SET_ADMIN_CAMPAIGNS_DATA);