import { Box, Typography } from "@mui/material";
import HomepodMini from "../images/deals-homepodmini.png";
import InstaxMini9 from "../images/deals-instaxmini9.png";
import BaseCampDuffelM from "../images/deals-basecampduffelm.png";
import React from "react";
import ProductCard from "../Components/ProductCard";

const PastOrders = () => {
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
        Past Orders
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
                <ProductCard product={product} pastorder={true} key={index} />
              ))}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography>Total: 32.4$</Typography>
        </Box>
      </Box>
    </>
  );
};

export default PastOrders;
