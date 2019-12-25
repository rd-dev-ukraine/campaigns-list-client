import * as React from "react";
import { PageWithHeader } from "../../layouts/PageWithHeader";
import { CampaignForm, ICampaignFormValues } from "../../components/CampaignForm";
import { createCampaignRequest } from "../../store/admin-campaigns/requests";
import { connect } from "react-redux";
import { createCampaignAction } from "../../store/admin-campaigns/actions";

interface Props {
  onSubmit: (formData: ICampaignFormValues) => void;
}

class CreateCampaignPageDumb extends React.Component<Props> {
  handleSubmit = (values: ICampaignFormValues) => {
    this.props.onSubmit(values);
  }

  render() {
    return (
      <PageWithHeader title="Create a new campaign">
        <CampaignForm onSubmit={this.handleSubmit} />
      </PageWithHeader>
    );
  }
}

export const CreateCampaignPage = connect(null , dispatch => {
  return {
    onSubmit: (formData: ICampaignFormValues) => dispatch(createCampaignAction({formData}))
  }
})(CreateCampaignPageDumb)