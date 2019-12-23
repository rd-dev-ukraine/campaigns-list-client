import { takeEvery, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { ADMIN_CAMPAIGNS_LIST_URL } from "../../urls";
import {
  setAdminCampaignsLoadingAction,
  setAdminCampaignsDataAction
} from "./actions";
import { getAdminCampaignsListRequest } from "./requests";

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
}
