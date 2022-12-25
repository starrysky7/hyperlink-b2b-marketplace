import { Formik } from "formik";
import { useRef } from "react";
import TextField from "./elements/text-field";
import Select from "./elements/select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function AddProductForm({ formikRef }) {
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
                label="Product Name"
                placeholder="Enter product name"
                id="productName"
                name="productName"
                value={rest.values.productName}
                onChange={rest.handleChange}
                error={
                  rest.touched.productName && Boolean(rest.errors.productName)
                }
                helperText={rest.touched.productName && rest.errors.productName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Categories"
                placeholder="Select Categories"
                id="categories"
                name="categories"
                value={rest.values.categories}
                onChange={rest.handleChange}
                error={
                  rest.touched.categories && Boolean(rest.errors.categories)
                }
                helperText={rest.touched.categories && rest.errors.categories}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Cost"
                placeholder="Enter Cost"
                id="cost"
                name="cost"
                value={rest.values.cost}
                onChange={rest.handleChange}
                error={rest.touched.cost && Boolean(rest.errors.cost)}
                helperText={rest.touched.cost && rest.errors.cost}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Short Description"
                placeholder="Enter short description"
                id="shortDescription"
                name="shortDescription"
                value={rest.values.shortDescription}
                onChange={rest.handleChange}
                error={
                  rest.touched.shortDescription &&
                  Boolean(rest.errors.shortDescription)
                }
                helperText={
                  rest.touched.shortDescription && rest.errors.shortDescription
                }
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
