import { IStore } from "../initialStore";

export function getCampaignListItems(store: IStore) {
  return store.campaigns.items;
}