import { Formik } from "formik";
import { useRef } from "react";
import TextField from "./elements/text-field";
import Select from "./elements/select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function AddShippingAddressForm({
  formikRef,
  initialValues,
  userId,
  edit,
}) {
  //add billing address mutation
  const addShippingAddress = useMutation({
    mutationFn: ({
      contactName,
      phoneNumber,
      addressLine1,
      addressLine2,
      city,
      state,
      postCode,
    }) => {
      return axios.post(
        `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/user-addShippingAddress`,
        {
          contactName,
          phoneNumber,
          addressLine1,
          addressLine2,
          city,
          state,
          postCode,
        }
      );
    },
  });

  //edit billing address mutation
  const editShippingAddress = useMutation({
    mutationFn: ({
      contactName,
      phoneNumber,
      addressLine1,
      addressLine2,
      city,
      state,
      postCode,
    }) => {
      return axios.post(
        `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/user-editShippingAddress`,
        {
          contactName,
          phoneNumber,
          addressLine1,
          addressLine2,
          city,
          state,
          postCode,
        }
      );
    },
  });

  //handle submit
  function handleSubmit(values) {
    if (edit) {
      editShippingAddress.mutate({
        id: userId,
        contactName: values.contactName,
        phoneNumber: values.phoneNumber,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        city: values.city,
        state: values.state,
        postCode: values.postCode,
      });
    } else {
      addShippingAddress.mutate({
        id: userId,
        contactName: values.contactName,
        phoneNumber: values.phoneNumber,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        city: values.city,
        state: values.state,
        postCode: values.postCode,
      });
    }
  }

  return (
    <Formik
      innerRef={formikRef}
      enableReinitialize
      validationSchema=""
      initialValues={
        initialValues ?? {
          contactName: "",
          phoneNumber: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          postCode: "",
        }
      }
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...rest }) => (
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={2} rowSpacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact Name"
                placeholder="Enter Contact Name"
                id="contactName"
                name="contactName"
                value={rest.values.contactName}
                onChange={rest.handleChange}
                error={
                  rest.touched.contactName && Boolean(rest.errors.contactName)
                }
                helperText={rest.touched.contactName && rest.errors.contactName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                placeholder="Enter Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                value={rest.values.phoneNumber}
                onChange={rest.handleChange}
                error={
                  rest.touched.phoneNumber && Boolean(rest.errors.phoneNumber)
                }
                helperText={rest.touched.phoneNumber && rest.errors.phoneNumber}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Enter Address Line 1"
                label="Address Line 1"
                required
                id="addressLine1"
                name="addressLine1"
                value={rest.values.addressLine1}
                onChange={rest.handleChange}
                error={
                  rest.touched.addressLine1 && Boolean(rest.errors.addressLine1)
                }
                helperText={
                  rest.touched.addressLine1 && rest.errors.addressLine1
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Enter Address 2"
                label="Address Line 2"
                id="addressLine2"
                name="addressLine2"
                value={rest.values.addressLine2}
                onChange={rest.handleChange}
                error={
                  rest.touched.addressLine2 && Boolean(rest.errors.addressLine2)
                }
                helperText={
                  rest.touched.addressLine2 && rest.errors.addressLine2
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Enter City"
                label="City"
                id="city"
                name="city"
                value={rest.values.city}
                onChange={rest.handleChange}
                error={rest.touched.city && Boolean(rest.errors.city)}
                helperText={rest.touched.city && rest.errors.city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Enter State / Province"
                label="State / Province"
                id="state"
                name="state"
                value={rest.values.state}
                onChange={rest.handleChange}
                error={rest.touched.state && Boolean(rest.errors.state)}
                helperText={rest.touched.state && rest.errors.state}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Enter Zip / Postal Code"
                label="Zip / Postal Code"
                required
                id="postCode"
                name="postCode"
                value={rest.values.postCode}
                onChange={rest.handleChange}
                error={rest.touched.postCode && Boolean(rest.errors.postCode)}
                helperText={rest.touched.postCode && rest.errors.postCode}
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

AddShippingAddressForm.propTypes = {
  formikRef: PropTypes.object.isRequired,
  edit: PropTypes.bool,
  initialValues: PropTypes.object,
  userId: PropTypes.string,
};

AddShippingAddressForm.defaultProps = {
  edit: false,
  userId: null,
  initialValues: {
    contactName: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postCode: "",
  },
};
