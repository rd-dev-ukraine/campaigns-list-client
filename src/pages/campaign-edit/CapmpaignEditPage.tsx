import * as React from "react";
import { ICampaign } from "../../store/types";
import { RouteComponentProps } from "react-router";
import { CampaignForm } from "../../components/CampaignForm";
import { PageWithHeader } from "../../layouts/PageWithHeader";
import { updateCampaignByIdRequest, getCampaignByIdRequest } from "../../store/admin-campaigns/requests";

interface Props extends RouteComponentProps<{ id: string }> {
  campaignItem: ICampaign;
}

interface State {
  formData: ICampaign | null;
}

export class CampaignEditPage extends React.Component<Props, State> {
  state: State = {
    formData: null,
  };

  handleSubmit = async (values: Partial<ICampaign>) => {
    await updateCampaignByIdRequest(this.state.formData._id, {
      ...this.state.formData,
      ...values
    });
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    getCampaignByIdRequest(id).then(res =>
      this.setState({ formData: res.result })
    );
  }

  render() {
    const campaignName = !this.state.formData ? "" : this.state.formData.title;

    return (
      <PageWithHeader title={`Editing: ${campaignName}`}>
        {this.state.formData ? (
          <CampaignForm
            campaignData={this.state.formData}
            onSubmit={this.handleSubmit}
          />
        ) : null}
      </PageWithHeader>
    );
  }
}
