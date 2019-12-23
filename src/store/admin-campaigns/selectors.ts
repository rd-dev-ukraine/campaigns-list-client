import { IStore } from "../initialStore";

export function getAdminCampaignList(store: IStore) {
  return store.adminCampaigns.items;
}
