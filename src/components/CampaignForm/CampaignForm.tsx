import * as React from "react";
import { withFormik, FormikProps } from "formik";
import { ICampaign } from "../../store/types";
import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

interface FormValues {
  title: string;
}

interface InputProps {
  campaignData?: ICampaign;
  isSubmiting?: boolean;
  onSubmit: (values: FormValues) => void;
}

type Props = InputProps & FormikProps<FormValues>;

const Form = (props: Props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            required
            label="Campaign Name"
            defaultValue={props.values["title"]}
            name="title"
            helperText={props.errors["title"]}
            onChange={props.handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={props.isSubmitting}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export const CampaignForm = withFormik<InputProps, FormValues>({
  mapPropsToValues: (props) => ({
    title: props.campaignData ? props.campaignData.title : ""
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting(true);
    props.onSubmit(values);
    setTimeout(() => setSubmitting(false), 750);
  },
  enableReinitialize: true
})(Form);
