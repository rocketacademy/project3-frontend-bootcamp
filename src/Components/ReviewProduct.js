import { Box, Button, Modal, Typography } from "@mui/material";

import Rating from "@mui/material/Rating";
import React from "react";
import ProductCard from "./ProductCard";

const ReviewProduct = ({ open, handleClose, product }) => {
  const [value, setValue] = React.useState(0);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {product.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Rate your order!
        </Typography>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button color="info" onClick={() => handleClose()}>
            Save
          </Button>
          <Button onClick={() => handleClose()}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReviewProduct;
