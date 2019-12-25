import * as React from "react";
import { ICampaign } from "../../store/types";
import { RouteComponentProps } from "react-router";
import { CampaignForm } from "../../components/CampaignForm";
import { PageWithHeader } from "../../layouts/PageWithHeader";
import { updateCampaignByIdRequest, getCampaignByIdRequest } from "../../store/admin-campaigns/requests";
import { connect } from "react-redux";
import { updateCampaignAction } from "../../store/admin-campaigns/actions";

type InputProps = RouteComponentProps<{id: string}>; 

interface Props extends InputProps {
  campaignItem: ICampaign;
  onSubmit: (formData: ICampaign) => void;
}

interface State {
  formData: ICampaign | null;
}

class CampaignEditPageDumb extends React.Component<Props, State> {
  state: State = {
    formData: null,
  };

  handleSubmit = async (values: Partial<ICampaign>) => {
    const formData = {
      ...this.state.formData,
      ...values
    };
    this.props.onSubmit(formData);
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

export const CampaignEditPage = connect(null, (dispatch, ownProps: InputProps) => {
  const {id: campaignId} = ownProps.match.params;
  return {
    onSubmit: (formData: ICampaign) => dispatch(updateCampaignAction({id: campaignId, formData}))
  }
})(CampaignEditPageDumb)