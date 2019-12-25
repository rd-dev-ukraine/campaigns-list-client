import { ICampaign } from "../types";
import { request } from "../../utils/request";

export async function getCampaignListRequest(userId: string): Promise<ICampaign> {
  const result = await request(`/campaign?userId=${userId}`);
  return result.data;
}