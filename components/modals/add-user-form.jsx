import CreateCategoryForm from "../forms/add-category-form";
import MyModal from "../modal";
import { useRef } from "react";
import Button from "@mui/material/Button";
import AddUserForm from "../forms/add-user-form";

export default function AddUserModal({ open, setOpen }) {
  const formikRef = useRef(null);

  return (
    <MyModal
      size="medium"
      title="Add User"
      open={open}
      setOpen={setOpen}
      showCloseIcon
      sx={{ width: "700px", height: "70vh" }}
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
            formikRef.submit();
          }}
        >
          Create
        </Button>,
      ]}
    >
      <AddUserForm formikRef={formikRef} />
    </MyModal>
  );
}
