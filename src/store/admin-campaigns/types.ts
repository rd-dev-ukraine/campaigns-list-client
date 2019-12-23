import { ICampaign } from "../types";

export interface IAdminCampaignsState {
  loading: boolean;
  items: ICampaign[];
}