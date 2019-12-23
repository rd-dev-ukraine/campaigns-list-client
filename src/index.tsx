import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store, history } from "./store";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { CampaignPage } from "./pages/campaign-list";
import { MuiThemeProvider } from "material-ui/styles";
import { CampaignEditPage } from "./pages/campaign-edit";
import { CreateCampaignPage } from "./pages/campaign-new";
import { CampaignViewPage } from "./pages/campaign-view";
import {
  CAMPAIGN_VIEW_URL,
  ADMIN_CREATE_CAMPAIGN_URL,
  ROOT_URL,
  ADMIN_EDIT_CAMPAIGN_URL,
  ADMIN_CAMPAIGNS_LIST_URL
} from "./urls";
import { AdminCampaignListPage } from "./pages/admin-campaign-list";

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={ROOT_URL.urlTemplate} component={CampaignPage} exact />
          <Route
            path={ADMIN_CAMPAIGNS_LIST_URL.urlTemplate}
            component={AdminCampaignListPage}
            exact
          />
          <Route
            path={CAMPAIGN_VIEW_URL.urlTemplate}
            component={CampaignViewPage}
            exact
          />
          <Route
            path={ADMIN_CREATE_CAMPAIGN_URL.urlTemplate}
            component={CreateCampaignPage}
            exact
          />
          <Route
            path={ADMIN_EDIT_CAMPAIGN_URL.urlTemplate}
            component={CampaignEditPage}
            exact
          />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log(process.env.REACT_APP_API_URL);
