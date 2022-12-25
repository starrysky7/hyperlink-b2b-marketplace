import { Formik } from "formik";
import { useRef } from "react";
import TextField from "./elements/text-field";
import Select from "./elements/select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function AddUserForm({ formikRef }) {
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
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  borderBottom: "1px solid var(--border-color-2)",
                }}
              >
                Contact Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                placeholder="Enter fullname"
                id="name"
                name="name"
                value={rest.values.name}
                onChange={rest.handleChange}
                error={rest.touched.name && Boolean(rest.errors.name)}
                helperText={rest.touched.name && rest.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                placeholder="Enter email address"
                id="emailAddress"
                name="emailAddress"
                value={rest.values.emailAddress}
                onChange={rest.handleChange}
                error={
                  rest.touched.emailAddress && Boolean(rest.errors.emailAddress)
                }
                helperText={
                  rest.touched.emailAddress && rest.errors.emailAddress
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                placeholder="Enter phone number"
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
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  borderBottom: "1px solid var(--border-color-2)",
                  marginTop: "10px",
                }}
              >
                Business Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Business Name"
                placeholder="Enter business name"
                id="businessName"
                name="businessName"
                value={rest.values.businessName}
                onChange={rest.handleChange}
                error={
                  rest.touched.businessName && Boolean(rest.errors.businessName)
                }
                helperText={
                  rest.touched.businessName && rest.errors.businessName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Business Industry"
                placeholder="Enter business industry"
                id="businessName"
                name="businessName"
                value={rest.values.businessName}
                onChange={rest.handleChange}
                error={
                  rest.touched.businessName && Boolean(rest.errors.businessName)
                }
                helperText={
                  rest.touched.businessName && rest.errors.businessName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Business Liscense Type"
                placeholder="Enter business liscense type"
                id="businessLiscenseType"
                name="businessLiscenseType"
                value={rest.values.businessLiscenseType}
                onChange={rest.handleChange}
                error={
                  rest.touched.businessLiscenseType &&
                  Boolean(rest.errors.businessLiscenseType)
                }
                helperText={
                  rest.touched.businessLiscenseType &&
                  rest.errors.businessLiscenseType
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="GSTIN / Business PAN"
                placeholder="Enter GSTIN / Business PAN"
                id="businessLiscenseNumber"
                name="businessLiscenseNumber"
                value={rest.values.businessLiscenseNumber}
                onChange={rest.handleChange}
                error={
                  rest.touched.businessLiscenseNumber &&
                  Boolean(rest.errors.businessLiscenseNumber)
                }
                helperText={
                  rest.touched.businessLiscenseNumber &&
                  rest.errors.businessLiscenseNumber
                }
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  borderBottom: "1px solid var(--border-color-2)",
                  marginTop: "10px",
                }}
              >
                Business Address
              </Typography>
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
