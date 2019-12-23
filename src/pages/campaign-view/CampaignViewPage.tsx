import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { ICampaign } from "../../store/types";
import { PageWithHeader } from "../../layouts/PageWithHeader";
import { getCampaignByIdRequest } from "../../store/admin-campaigns/requests";

type Props = RouteComponentProps<{ id: string }>;

interface State {
  campaignDetails: ICampaign | null;
}

class CampaignViewPageDumb extends React.Component<Props, State> {
  state: State = {
    campaignDetails: null
  };

  componentDidMount() {
    getCampaignByIdRequest(this.props.match.params.id).then(res =>
      this.setState({ campaignDetails: res.result })
    );
  }

  render() {
    const pageTitle = this.state.campaignDetails
      ? this.state.campaignDetails.title
      : "";

    return (
      <PageWithHeader title={pageTitle}>
        <div>fg</div>
      </PageWithHeader>
    );
  }
}

export const CampaignViewPage = withRouter(CampaignViewPageDumb);
