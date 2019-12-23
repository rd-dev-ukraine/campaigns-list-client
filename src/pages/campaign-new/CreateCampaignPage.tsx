import * as React from "react";
import { PageWithHeader } from "../../layouts/PageWithHeader";
import { CampaignForm } from "../../components/CampaignForm";
import { createCampaignRequest } from "../../store/admin-campaigns/requests";

interface FormValues {
  title: string;
}

export class CreateCampaignPage extends React.Component<any> {
  handleSubmit = (values: FormValues) => {
    const {title} = values;
    createCampaignRequest(title);
  }

  render() {
    return (
      <PageWithHeader title="Create a new campaign">
        <CampaignForm onSubmit={this.handleSubmit} />
      </PageWithHeader>
    );
  }
}
