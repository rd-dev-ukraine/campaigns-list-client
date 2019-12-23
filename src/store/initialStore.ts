import { ICampaignsState } from "./campaigns/types";
import { IAdminCampaignsState } from "./admin-campaigns/types";

export interface IStore {
  router?: any;
  campaigns: ICampaignsState;
  adminCampaigns: IAdminCampaignsState;
}


export const initialStore: IStore = {
  campaigns: {
    loading: false,
    items: []
  },
  adminCampaigns: {
    loading: false,
    items: []
  }
}