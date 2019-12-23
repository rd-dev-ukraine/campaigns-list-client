import { ICampaign } from "../types";
import { request } from "../../utils/request";

export async function getAdminCampaignsListRequest(): Promise<ICampaign[]> {
  const result = await request("/admin/campaign");

  return result.data;
}

export async function getCampaignByIdRequest(
  id: string
): Promise<{ result: ICampaign }> {
  const result = await request(`/admin/campaign/${id}`);
  return result.data;
}

export async function updateCampaignByIdRequest(
  id: string,
  payload: Partial<ICampaign>
) {
  const result = await request.put(`/admin/campaign/${id}`, payload);

  return result.data;
}

export async function createCampaignRequest(campaignTitle: string) {
  const result = await request.post("/admin/campaign", {
    title: campaignTitle
  });

  return result.data;
}
