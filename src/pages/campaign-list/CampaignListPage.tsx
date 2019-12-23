import * as React from "react";
import "./CampaignListPage.scss";
import { CampaignList } from "../../components/CampaignList";
import { connect } from "react-redux";
import { IStore } from "../../store/initialStore";
import { getCampaignListItems } from "../../store/campaigns/selectors";
import { ICampaign } from "../../store/types";
import { PageWithHeader } from "../../layouts/PageWithHeader";

interface Props {
  items: ICampaign[];
  isLoading: boolean;
}

class CampaignPageDumb extends React.Component<Props> {
  render() {
    const {isLoading} = this.props;

    return (
      <PageWithHeader title="Campaign List">
        {isLoading ? <span>Loading list...</span>: <CampaignList items={this.props.items} />}
      </PageWithHeader>
    );
  }
}

export const CampaignPage = connect(
  (store: IStore) => {
    return {
      items: getCampaignListItems(store),
      isLoading: store.campaigns.loading
    };
  },
)(CampaignPageDumb);
