import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { campaignPageSaga } from "./campaigns/saga";
import { adminCampaignPageSaga } from "./admin-campaigns/saga";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([campaignPageSaga(), adminCampaignPageSaga()]);
}
