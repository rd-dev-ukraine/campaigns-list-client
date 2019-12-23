import { ICampaign } from "../types";
import { request } from "../../utils/request";

export async function getCampaignListRequest(): Promise<ICampaign> {
  const result = await request("/campaign");
  return result.data;
}