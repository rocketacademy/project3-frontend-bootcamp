import React, { useState } from "react";
import HomepodMini from "../images/deals-homepodmini.png";
import InstaxMini9 from "../images/deals-instaxmini9.png";
import BaseCampDuffelM from "../images/deals-basecampduffelm.png";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Search = () => {
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = [
    {
      image: HomepodMini,
      name: "HomePod mini",
      description: "Table with air purifier, stained veneer/black",
      price: 239.0,
      stars: 121,
    },
    {
      image: InstaxMini9,
      name: "Instax Mini 9",
      description: "Selfie mode and selfie mirror, Macro mode",
      price: 239.0,
      stars: 121,
    },
    {
      image: BaseCampDuffelM,
      name: "Base Camp Duffel M",
      description: "Table with air purifier, stained veneer/black",
      price: 239.0,
      stars: 121,
    },
  ];

  const search = (e) => {
    e.preventDefault();
    const trimmedFilter = filter.trim();
    if (trimmedFilter === "") {
      setFilteredProducts([]);
    } else {
      const filterProductsByName = products.filter((product) => {
        return product.name.toLowerCase().includes(trimmedFilter.toLowerCase());
      });
      setFilteredProducts(filterProductsByName);
    }
  };

  return (
    <>
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Search"
              variant="outlined"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              sx={{ marginBottom: "16px", width: "100%", maxWidth: "300px" }}
            />
            <Button onClick={(e) => search(e)} variant="contained">
              Search
            </Button>
          </Box>
          <Box sx={{ pt: "20px", margin: "0" }}>
            <Grid container spacing={2}>
              {filteredProducts.map((product, index) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  key={index}
                  sx={{ width: "100%", margin: "0", padding: "0" }}
                >
                  <Card sx={{ width: "100%", maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={product.image}
                        alt={product.name}
                      />
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                          </Typography>
                          <Typography sx={{ marginLeft: "auto" }} variant="h8">
                            ${product.price}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ marginBottom: "20px" }}
                          variant="body2"
                          color="text.secondary"
                        >
                          {product.description} <br />
                        </Typography>
                        <Button variant="outlined">Add to cart</Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Search;
