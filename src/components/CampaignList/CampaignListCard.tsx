import * as React from "react";
import "./CampaignListCard.scss";
import { ICampaign } from "../../store/types";
import { Card, CardActions } from "material-ui";
import { CardContent, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

type Props = ICampaign;

export const CampaignListCard = (props: Props) => {
  return (
    <Card className="campaign-card">
      <CardContent className="card-header-wrapper">
        <p className="title">Company name:</p>
        <span>{props.title}</span>
      </CardContent>
      <CardActions className="actions-wrapper">
        <div className="btn-wrapper">
          <Button size="small" color="primary" >
            <Link to={`/admin/campaign/${props._id}`} className="link-btn">Edit</Link>
          </Button>
        </div>
        <div className="view-icon-wrapper">
          <span>{props.views_count}</span>
          <i className="icon"></i>
        </div>
      </CardActions>
    </Card>
  );
};
