import CreateCategoryForm from "../forms/add-category-form";
import MyModal from "../modal";
import { useRef } from "react";
import Button from "@mui/material/Button";
import AddBillingAddressForm from "../forms/add-billing-address-form";
import AddPaymentMethodForm from "../forms/add-payment-type-form";

export default function AddPaymentMethodModal({ open, setOpen }) {
  const formikRef = useRef(null);

  return (
    <MyModal
      size="medium"
      title="Add Payment Method"
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
      <AddPaymentMethodForm formikRef={formikRef} />
    </MyModal>
  );
}
