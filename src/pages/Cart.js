import { Box, Button, Typography } from "@mui/material";
import HomepodMini from "../images/deals-homepodmini.png";
import InstaxMini9 from "../images/deals-instaxmini9.png";
import BaseCampDuffelM from "../images/deals-basecampduffelm.png";
import React from "react";
import ProductCard from "../Components/ProductCard";

const Cart = () => {
  const products = [
    {
      photos: [
        {
          url: HomepodMini,
        },
      ],
      title: "HomePod mini",
      description: "Table with air purifier, stained veneer/black",
      price: 239.0,
      stars: 121,
    },
    {
      photos: [
        {
          url: InstaxMini9,
        },
      ],
      title: "Instax Mini 9",
      description: "Selfie mode and selfie mirror, Macro mode",
      price: 239.0,
      stars: 121,
    },
    {
      photos: [
        {
          url: BaseCampDuffelM,
        },
      ],
      title: "Base Camp Duffel M",
      description: "Table with air purifier, stained veneer/black",
      price: 239.0,
      stars: 121,
    },
  ];

  return (
    <>
      <Typography variant="h3" sx={{ py: "20px", textAlign: "center" }}>
        My Cart
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ width: "400px" }}>
          <Box sx={{ p: "2% 5%", margin: "0" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {products.map((product, index) => (
                <ProductCard
                  cart={true}
                  quantity={20}
                  product={product}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography>Subtotal: 30$</Typography>
          <Typography>GST 8%: 2.4$</Typography>
          <Button variant="contained">Check Out</Button>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
