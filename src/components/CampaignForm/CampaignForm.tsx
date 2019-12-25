import * as React from "react";
import { withFormik, FormikProps } from "formik";
import { ICampaign } from "../../store/types";
import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export interface ICampaignFormValues {
  title: string;
  max_count: number;
  max_count_per_user: number;
}

interface InputProps {
  campaignData?: ICampaign;
  isSubmiting?: boolean;
  onSubmit: (values: ICampaignFormValues) => void;
}

type Props = InputProps & FormikProps<ICampaignFormValues>;

class Form extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = !isNaN(Number(e.target.value))
      ? Number(e.target.value)
      : (e.target.value as any);
    this.props.handleChange(e);
  };

  render() {
    const {
      values,
      handleSubmit,
      isSubmitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item container direction="column">
            <TextField
              required
              label="Campaign Name"
              defaultValue={values["title"]}
              name="title"
              onChange={this.handleChange}
            />
            <TextField
              required
              label="Max views count"
              defaultValue={values["max_count"]}
              name="max_count"
              onChange={this.handleChange}
            />
            <TextField
              required
              label="Max views per user"
              defaultValue={values["max_count_per_user"]}
              name="max_count_per_user"
              type="number"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export const CampaignForm = withFormik<InputProps, ICampaignFormValues>({
  mapPropsToValues: props => {
    const { campaignData } = props;
    if (campaignData) {
      const { max_count, max_count_per_user, title } = campaignData;

      return {
        max_count,
        max_count_per_user,
        title
      };
    }

    return {} as any;
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting(true);
    props.onSubmit(values);
    setTimeout(() => setSubmitting(false), 750);
  },
  enableReinitialize: true
})(Form);
