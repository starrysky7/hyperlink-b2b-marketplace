import AddCategoryForm from "../forms/add-category-form";
import MyModal from "../modal";
import { useRef } from "react";
import Button from "@mui/material/Button";

export default function AddCategoryModal({
  open,
  setOpen,
  edit,
  categoryId,
  initialValues,
}) {
  const formikRef = useRef(null);

  return (
    <MyModal
      size="medium"
      title={!edit ? "Create Category" : "Edit Category"}
      open={open}
      setOpen={setOpen}
      showCloseIcon
      sx={{ width: "400px" }}
      actions={[
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setOpen(false);
          }}
        >
          Close
        </Button>,
        <Button
          variant="contained"
          onClick={() => {
            formikRef.current.submitForm();
          }}
        >
          Create
        </Button>,
      ]}
    >
      <AddCategoryForm
        edit={edit}
        formikRef={formikRef}
        initialValues={initialValues}
        categoryId={categoryId}
      />
    </MyModal>
  );
}
