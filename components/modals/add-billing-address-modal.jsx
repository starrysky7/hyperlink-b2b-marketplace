import CreateCategoryForm from "../forms/add-category-form";
import MyModal from "../modal";
import { useRef } from "react";
import Button from "@mui/material/Button";
import AddBillingAddressForm from "../forms/add-billing-address-form";

export default function AddBillingAddressModal({ open, setOpen }) {
  const formikRef = useRef(null);

  return (
    <MyModal
      size="medium"
      title="Add Product"
      open={open}
      setOpen={setOpen}
      showCloseIcon
      sx={{ width: "700px" }}
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
      <AddBillingAddressForm formikRef={formikRef} />
    </MyModal>
  );
}
