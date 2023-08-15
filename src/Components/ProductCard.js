import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, Button, Typography } from "@mui/material";

const ProductCard = ({ product, cart, quantity }) => {
  console.log("cart", cart);
  return (
    <Box>
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardMedia
          sx={{ height: 300, objectFit: "cover" }}
          image={
            product.photos
              ? product.photos[0].url
              : "https://hinacreates.com/wp-content/uploads/2021/06/dummy2-450x341.png"
          }
          title={product.title + product.id}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product.title}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            ${product.price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: "60px", maxHeight: "60px", overflow: "hidden" }}
          >
            {product.description?.split(" ").slice(0, 15).join(" ")}
          </Typography>
          {cart ? (
            <>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ overflow: "hidden" }}
              >
                Quantity: {quantity}
              </Typography>
            </>
          ) : null}
        </CardContent>
        <CardActions>
          {cart ? (
            <>
              <Button variant="outlined">-</Button>
              <Button variant="outlined">+</Button>
              <Button variant="outlined" color="error">
                Delete
              </Button>
            </>
          ) : (
            <Button variant="outlined">Add to cart</Button>
          )}
        </CardActions>
      </Card>
      {cart ? (
        <Box>
          <hr />
        </Box>
      ) : null}
    </Box>
  );
};

export default ProductCard;
