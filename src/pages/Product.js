import React, { useEffect, useState } from "react";
import VibingCat from "../images/vibingcat.gif";
import Cat1 from "../images/cat1.png";
import Cat2 from "../images/cat2.png";
import Cat3 from "../images/cat3.png";
import Cat4 from "../images/cat4.jpeg";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import "./Product.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [productIndex, setProductIndex] = useState();
  const [itemName, setItemName] = useState("ITEM NAME");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPricePerUnit, setItemPricePerUnit] = useState("1.00");
  const [currentAmountChoice, setCurrentAmountChoice] = useState(1);

  const param = useParams();
  if (productIndex !== param.productId) {
    setProductIndex(param.productId);
  }

  useEffect(() => {
    if (productIndex) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/products/${productIndex}`)
        .then((info) => {
          console.log(info);
          const data = info.data;
          setItemName(data.title);
          setItemDescription(data.description);
          setItemPricePerUnit(Number(data.price).toFixed(2));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [productIndex]);

  const handleChangeAmount = (input) => {
    if (input === "L") {
      return setCurrentAmountChoice((prev) => prev - 1);
    } else if (input === "R") {
      return setCurrentAmountChoice((prev) => prev + 1);
    } else {
      return;
    }
  };
  return (
    <div>
      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item xs={12} lg={6}>
          <Box className="main-picture-area">
            <Box className="main-picture-container">
              <Box
                component="img"
                className="picture"
                src={VibingCat}
                alt="Picture"
              />
            </Box>
          </Box>
          <Box className="side-picture-area">
            <Box className="side-picture-container">
              <Box
                className="picture"
                component="img"
                src={Cat1}
                alt="Picture"
              />
            </Box>
            <Box className="side-picture-container">
              <Box
                className="picture"
                component="img"
                src={Cat2}
                alt="Picture"
              />
            </Box>
            <Box className="side-picture-container">
              <Box
                className="picture"
                component="img"
                src={Cat3}
                alt="Picture"
              />
            </Box>
            <Box className="side-picture-container">
              <Box
                className="picture"
                component="img"
                src={Cat4}
                alt="Picture"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box className="description-area-overall">
            <Box className="description-area-bg">
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  width: "44vw",
                  height: "44vw",
                  marginLeft: "5vw",
                  marginTop: "4vw",
                }}
              >
                <Grid item xs={1}>
                  <Typography
                    fontWeight="bold"
                    fontSize="4vw"
                    sx={{ width: "34vw" }}
                  >
                    {itemName}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography
                    fontWeight="bold"
                    fontSize="2vw"
                    sx={{ width: "34vw" }}
                  >
                    Description:
                    <Typography fontSize="1.5vw">{itemDescription}</Typography>
                  </Typography>
                </Grid>
                <Box item xs={2}>
                  <Grid container display="inline-flex" flexDirection="row">
                    <Grid item xs={6}>
                      <Typography
                        fontWeight="bold"
                        fontSize="2vw"
                        // sx={{ width: "34vw" }}
                      >
                        Price:
                        <Typography fontSize="1.5vw">
                          ${itemPricePerUnit}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item sx={{ marginTop: "30px" }}>
                      <Button
                        variant="outlined"
                        onClick={(e) => handleChangeAmount("L")}
                      >
                        ←
                      </Button>
                      <TextField
                        variant="outlined"
                        value={currentAmountChoice}
                        onChange={(e) => setCurrentAmountChoice(e.target.value)}
                        size="small"
                      />
                      <Button
                        variant="outlined"
                        onClick={(e) => handleChangeAmount("R")}
                      >
                        ←
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ marginLeft: "45vw" }}>
        Add to Cart!
      </Button>
    </div>
  );
};

export default Product;
