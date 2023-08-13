import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Cart = () => {
  const itemsCart = [
    {
      name: "iPhone 4S",
      description: "apple product",
      quantity: 2,
    },
    {
      name: "iPhone X",
      description: "apple product",
      quantity: 3,
    },
  ];

  return (
    <>
      <Typography variant="h3">My Cart</Typography>
      <Box>
        {itemsCart.map((item, i) => (
          <Box sx={{ display: "flex", flexDirection: "row", py: "20px" }}>
            <Box sx={{ width: "200px" }}>
              <img
                alt={i}
                className="product-img"
                src="https://hinacreates.com/wp-content/uploads/2021/06/dummy2-450x341.png"
              ></img>
            </Box>
            <Box>
              <Typography>{item.name}</Typography>
              <Typography>Quantity: {item.quantity}</Typography>
              <Typography>
                Description:
                {item.description?.split(" ").slice(0, 15).join(" ")}
              </Typography>
              <Box sx={{ paddingTop: "20px" }}>
                <Button variant="outlined">Add one more</Button>
                <Button variant="outlined">Delete item</Button>
              </Box>
            </Box>
          </Box>
        ))}
        <Button variant="contained">Check Out</Button>
      </Box>
    </>
  );
};

export default Cart;
