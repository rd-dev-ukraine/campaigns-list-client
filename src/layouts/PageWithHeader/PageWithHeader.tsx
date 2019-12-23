import * as React from "react";
import "./PageWithHeader.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Grid } from "@material-ui/core";
import { LinkButton } from "../../components/LinkButton";
import { ROOT_URL, ADMIN_CAMPAIGNS_LIST_URL, ADMIN_CREATE_CAMPAIGN_URL } from "../../urls";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const PageWithHeader = (props: Props) => {
  return (
    <div className="page-with-header-layout-wrapper">
      <AppBar position="static">
        <Grid container justify="space-between">
          <Grid item>
          <Toolbar>
            <LinkButton to={ROOT_URL.urlTemplate}>Home</LinkButton>
            <LinkButton to={ADMIN_CAMPAIGNS_LIST_URL.urlTemplate}>Admin</LinkButton>
            <LinkButton to={ADMIN_CREATE_CAMPAIGN_URL.urlTemplate}>New Campaign</LinkButton>
          </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar>
              <Typography variant="h6">{props.title}</Typography>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <div className="page-with-header-layout-content">{props.children}</div>
    </div>
  );
};
