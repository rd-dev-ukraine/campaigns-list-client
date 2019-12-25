import { takeEvery, put, call } from "redux-saga/effects";
import qs from 'query-string';
import {
  setCampaignListLoadingAction,
  setCampaignsListDataAction
} from "./actions";
import { getCampaignListRequest } from "./requests";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { ROOT_URL } from "../../urls";

function* fetchAndSetCampaignList(action: LocationChangeAction) {
  const query = qs.parse(action.payload.location.search) as {[k: string]: string};
  yield put(setCampaignListLoadingAction({ loading: true }));

  const request = yield getCampaignListRequest(query.userId || "");

  yield put(setCampaignsListDataAction({ items: request }));

  yield put(setCampaignListLoadingAction({ loading: false }));
}

export function* campaignPageSaga() {
  yield takeEvery(LOCATION_CHANGE, function*(action: LocationChangeAction) {
    if(ROOT_URL.match(action.payload.location.pathname, true).isMatched) {
      yield call(fetchAndSetCampaignList, action);
      return;
    }
  })
}
