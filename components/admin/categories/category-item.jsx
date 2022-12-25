import PropTypes from "prop-types";
import { Delete, Edit, Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddCategoryModal from "../../modals/add-category-modal";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

export default function CategoryItem({ name, id, parent, callback }) {
  //state to manage add/edit category modal
  const [open, setOpen] = useState(false);

  //delete category mutation
  const deleteCategory = useMutation({
    mutationFn: ({ id }) => {
      return axios.delete(
        `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-deleteCategory?id=${id}`
      );
    },
  });

  if (deleteCategory.isSuccess) {
    callback();
  }

  return (
    <>
      <AddCategoryModal
        edit
        open={open}
        setOpen={setOpen}
        categoryId={id}
        initialValues={{ name: name, parent: parent }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          border: "1px solid var(--border-color-2)",
          width: "400px",
          height: "40px",
          backgroundColor: "var(--paper-color)",
          zIndex: 10,
          padding: "10px",
        }}
        draggable
        //   onDragStart={(e) => handleDragStart(e)}
        //   onDragEnd={(e) => handleDragEnd(e)}
        //   onDrop={(e) => handleDrop(e)}
      >
        <Typography variant="body2">{name}</Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Edit />
          </IconButton>
          <IconButton
            onClick={() => {
              deleteCategory.mutate({ id: id });
            }}
          >
            <Delete />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired,
  callback: PropTypes.func,
};

CategoryItem.defaultProps = {
  callback: () => {},
};
