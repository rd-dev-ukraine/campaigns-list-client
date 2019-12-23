import * as React from "react";
import "./AdminCampaignPage.scss";
import { CampaignList } from "../../components/CampaignList";
import { connect } from "react-redux";
import { IStore } from "../../store/initialStore";
import { ICampaign } from "../../store/types";
import { PageWithHeader } from "../../layouts/PageWithHeader";
import { getAdminCampaignList } from "../../store/admin-campaigns/selectors";

interface Props {
  items: ICampaign[];
  isLoading: boolean;
}

class AdminCampaignListPageDumb extends React.Component<Props> {
  render() {
    const {isLoading} = this.props;

    return (
      <PageWithHeader title="Campaign List">
        {isLoading ? <span>Loading list...</span>: <CampaignList items={this.props.items} />}
      </PageWithHeader>
    );
  }
}

export const AdminCampaignListPage = connect(
  (store: IStore) => {
    return {
      items: getAdminCampaignList(store),
      isLoading: store.adminCampaigns.loading
    };
  },
)(AdminCampaignListPageDumb);