import { combineReducers, createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaMiddleware, rootSaga } from "./saga";
import { campaignReducer } from "./campaigns/reducers/campaignReducer";
import { initialStore } from "./initialStore";
import { adminCampaignsReducer } from "./admin-campaigns/reducers/adminCampaignsReducer";
export const history = createBrowserHistory();


export const store = createStore(
  combineReducers({
    router: connectRouter(history),
    campaigns: campaignReducer,
    adminCampaigns: adminCampaignsReducer,
  }),
  initialStore as any,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);
