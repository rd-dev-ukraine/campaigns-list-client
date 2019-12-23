import * as React from "react";
import './CampaignList.scss';
import { ICampaign } from "../../store/types";
import { Grid } from "@material-ui/core";
import { CampaignListCard } from "./CampaignListCard";

interface Props {
  items: ICampaign[] | undefined;
}

export class CampaignList extends React.Component<Props> {
  render() {
    const { items } = this.props;

    return (
      <div className="campaign-list-wrapper">
        <Grid container spacing={4}>
          {items &&
            items.map(item => {
              return (
                <Grid item xs={12} sm={4} key={item._id}>
                  <CampaignListCard {...item}/>
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}
