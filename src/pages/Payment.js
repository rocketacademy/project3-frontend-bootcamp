import {
  Box,
  Button,
  Typography,
  Link,
  Divider,
  Paper,
  IconButton,
  InputBase,
} from "@mui/material";
import { Directions } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function Payment() {
  const [overallPrice, setOverallPrice] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const itemsCart = [
    {
      name: "iPhone 4S",
      description: "apple product",
      quantity: 2,
      price: 395.75,
    },
    {
      name: "iPhone X",
      description: "apple product",
      quantity: 3,
      price: 891.99,
    },
  ];

  function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }

  useEffect(() => {
    setOverallPrice(calculateTotalPrice(itemsCart));
  }, []);

  return (
    <>
      <Typography variant="h3">Current Cart</Typography>
      <Box>
        {itemsCart.map((item, i) => (
          <Box sx={{ display: "flex", flexDirection: "row", py: "20px" }}>
            <Link href="./products/1" target="_blank" rel="noopener">
              <Box sx={{ width: "200px" }}>
                <img
                  alt={i}
                  className="product-img"
                  src="https://hinacreates.com/wp-content/uploads/2021/06/dummy2-450x341.png"
                ></img>
              </Box>
              <br />
              <Divider variant="middle" />
            </Link>

            <Box>
              <Typography>{item.name}</Typography>
              <Typography>Quantity: {item.quantity}</Typography>
              <Typography>
                Description:
                {item.description?.split(" ").slice(0, 15).join(" ")}
              </Typography>
              <Typography>Price: ${item.price.toFixed(2)}</Typography>
              <Box sx={{ paddingTop: "20px" }}>
                <Button variant="outlined">Delete item</Button>
              </Box>
              <br />
              <Divider variant="middle" />
            </Box>
          </Box>
        ))}
      </Box>
      <Typography variant="h4">
        Total Cart Price: ${overallPrice.toFixed(2)}
      </Typography>
      <br />
      <Divider variant="middle" />
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ padding: "10px" }} aria-label="menu"></IconButton>
        <InputBase
          sx={{ marginLeft: 1, flex: 1 }}
          placeholder="Coupon Code Here"
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <Directions />
        </IconButton>
      </Paper>
    </>
  );
}

export default Payment;
