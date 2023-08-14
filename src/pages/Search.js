import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const Search = () => {
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const search = (e) => {
    e.preventDefault();
    const trimmedFilter = filter.trim();
    if (trimmedFilter === "") {
      setFilteredProducts([]);
    } else {
      const filterSearch = {
        search: trimmedFilter.toLowerCase(),
      };
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/products/search`,
          filterSearch
        )
        .then((response) => {
          setFilteredProducts(response.data);
          setFilter("");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
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
          <Box>
            <Box sx={{ p: "2% 5%", margin: "0" }}>
              <Grid container spacing={2}>
                {filteredProducts.map((product, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Search;
