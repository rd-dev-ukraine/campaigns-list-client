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

export async function createCampaignRequest(payload: Partial<ICampaign>) {
  const { title, max_count_per_user, max_count } = payload;

  const result = await request.post("/admin/campaign", {
    title,
    max_count,
    max_count_per_user
  });

  return result.data;
}
