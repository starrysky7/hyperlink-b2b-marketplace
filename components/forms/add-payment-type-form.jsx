import { Formik } from "formik";
import { useRef } from "react";
import TextField from "./elements/text-field";
import Select from "./elements/select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function AddPaymentMethodForm({ formikRef }) {
  //initial form values
  const initialValues = {};

  //handle submit
  function handleSubmit() {}
  return (
    <Formik
      innerRef={formikRef}
      enableReinitialize
      validationSchema=""
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...rest }) => (
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={2} rowSpacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name on card"
                placeholder="Name on card"
                id="nameOnCard"
                name="nameOnCard"
                value={rest.values.nameOnCard}
                onChange={rest.handleChange}
                error={
                  rest.touched.nameOnCard && Boolean(rest.errors.nameOnCard)
                }
                helperText={rest.touched.nameOnCard && rest.errors.nameOnCard}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Card Number"
                placeholder="Enter Card Number"
                id="cardNumber"
                name="cardNumber"
                value={rest.values.cardNumber}
                onChange={rest.handleChange}
                error={
                  rest.touched.cardNumber && Boolean(rest.errors.cardNumber)
                }
                helperText={rest.touched.cardNumber && rest.errors.cardNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Expiry"
                placeholder="Enter Expiry"
                id="expiry"
                name="expiry"
                value={rest.values.expiry}
                onChange={rest.handleChange}
                error={rest.touched.expiry && Boolean(rest.errors.expiry)}
                helperText={rest.touched.expiry && rest.errors.expiry}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CVV"
                placeholder="Enter CVV"
                id="cvv"
                name="cvv"
                value={rest.values.cvv}
                onChange={rest.handleChange}
                error={rest.touched.cvv && Boolean(rest.errors.cvv)}
                helperText={rest.touched.cvv && rest.errors.cvv}
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
