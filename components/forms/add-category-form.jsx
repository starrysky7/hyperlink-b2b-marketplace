import PropTypes from "prop-types";
import { Formik } from "formik";
import { useRef } from "react";
import TextField from "./elements/text-field";
import Select from "./elements/select";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

export default function AddCategoryForm({ formikRef, edit, initialValues }) {
  //add category mutation
  const addCategory = useMutation({
    mutationFn: ({ name, parent }) => {
      return axios.post(
        `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-addCategory`,
        {
          name: name,
          parent: parent,
        }
      );
    },
  });

  //edit category mutation
  const editCategory = useMutation({
    mutationFn: ({ name, parent }) => {
      return axios.post(
        `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-updateCategory`,
        {
          name: name,
          parent: parent,
        }
      );
    },
  });

  //handle submit
  function handleSubmit(values) {
    console.log(edit)
    if (edit) {
      editCategory.mutate({ name: values.name, parent: values.parent });
    } else {
      addCategory.mutate({ name: values.name, parent: values.parent });
    }
  }
  return (
    <Formik
      innerRef={formikRef}
      enableReinitialize
      validationSchema=""
      initialValues={initialValues ?? { name: "", parent: "" }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...rest }) => (
        <form onSubmit={handleSubmit}>
          {/*
           *
           * category name
           *
           */}

          <TextField
            id="name"
            label="Category Name"
            value={rest.values?.name}
            onChange={rest.handleChange}
            sx={{ marginBottom: "10px" }}
          />

          {/*
           *
           * parent category
           *
           */}
          {(() => {
            //get categories query
            async function getAllCategories() {
              const res = await axios.get(
                `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-getAllCategories`
              );

              if (res.data.status) {
                return res.data.data;
              }
            }

            //parent category field options
            //run get categories query
            const { isLoading, isError, data, error } = useQuery(
              ["allCategories"],
              () => getAllCategories()
            );
            return (
              <Select
                id="parent"
                label="Parent Category"
                value={rest.values?.parent}
                setFormikValue={rest.setFieldValue}
                options={data}
                labelAccessor="name"
                valueAccessor="id"
              />
            );
          })()}
        </form>
      )}
    </Formik>
  );
}

AddCategoryForm.propTypes = {
  formikRef: PropTypes.object.isRequired,
  edit: PropTypes.bool,
  initialValues: PropTypes.object,
};

AddCategoryForm.defaultProps = {
  edit: false,
  initialValues: {
    name: "",
    parent: "",
  },
};
