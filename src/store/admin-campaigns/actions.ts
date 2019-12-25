import { makeAction } from "../../utils/makeAction";
import { ICampaign } from "../types";
import { ICampaignFormValues } from "../../components/CampaignForm";

export const SET_ADMIN_CAMPAIGNS_LOADING = 'SET_ADMIN_CAMPAIGNS_LOADING';

export const setAdminCampaignsLoadingAction = makeAction<{loading: boolean}>(SET_ADMIN_CAMPAIGNS_LOADING);

export const SET_ADMIN_CAMPAIGNS_DATA = 'SET_ADMIN_CAMPAIGNS_DATA';

export const setAdminCampaignsDataAction = makeAction<{items: ICampaign[]}>(SET_ADMIN_CAMPAIGNS_DATA);

export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';

export const updateCampaignAction = makeAction<{id: string, formData: Partial<ICampaign>}>(UPDATE_CAMPAIGN);

export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN';

export const createCampaignAction = makeAction<{formData: ICampaignFormValues}>(CREATE_CAMPAIGN);