import { ICampaign } from "../types";

export interface ICampaignsState {
  loading: boolean;
  items: ICampaign[];
}
