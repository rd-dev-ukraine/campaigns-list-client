import { takeEvery, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { ADMIN_CAMPAIGNS_LIST_URL } from "../../urls";
import {
  setAdminCampaignsLoadingAction,
  setAdminCampaignsDataAction,
  UPDATE_CAMPAIGN,
  updateCampaignAction,
  createCampaignAction,
  CREATE_CAMPAIGN
} from "./actions";
import {
  getAdminCampaignsListRequest,
  updateCampaignByIdRequest,
  createCampaignRequest
} from "./requests";

function* createCampaignSaga(action: ReturnType<typeof createCampaignAction>) {
  const { formData } = action.payload;
  try {
    yield createCampaignRequest(formData);
  } catch (e) {
    console.log("Error occured", e.message);
  }
}

function* updateCampaignSaga(action: ReturnType<typeof updateCampaignAction>) {
  const { id, formData } = action.payload;

  try {
    yield updateCampaignByIdRequest(id, formData);
  } catch (e) {
    console.log("Error occured", e.message);
  }
}

export function* adminCampaignPageSaga() {
  yield takeEvery(LOCATION_CHANGE, function*(action: LocationChangeAction) {
    const { pathname } = action.payload.location;
    if (ADMIN_CAMPAIGNS_LIST_URL.match(pathname, true).isMatched) {
      yield put(setAdminCampaignsLoadingAction({ loading: true }));
      try {
        const result = yield getAdminCampaignsListRequest();

        yield put(setAdminCampaignsDataAction({ items: result }));
      } catch (e) {
        console.log("Error", e);
      }

      yield put(setAdminCampaignsLoadingAction({ loading: false }));
    }
  });

  yield takeEvery(UPDATE_CAMPAIGN, updateCampaignSaga);
  yield takeEvery(CREATE_CAMPAIGN, createCampaignSaga);
}
