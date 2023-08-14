import { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

function UploadProduct() {
  const [productName, setProductName] = useState("");
  const [productPricePerUnit, setProductPricePerUnit] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productCategory, setProductCategory] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);
  const [productDiscount, setProductDiscount] = useState();

  return (
    <>
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 3 }}>
              Product upload Page!
            </Typography>
            <Typography variant="body1">
              Input ALL Details to upload your product for sale!
            </Typography>
          </Grid>
        </Grid>
        <Card>
          <CardContent>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Product Name
            </Typography>
            <TextField
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="GIGAMAX PRO 1000"
              sx={{ width: "48vw" }}
            />
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Product Price per Unit
            </Typography>
            <TextField
              value={productPricePerUnit}
              onChange={(e) => setProductPricePerUnit(e.target.value)}
              placeholder="$250.00"
              sx={{ width: "48vw" }}
            />
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Description of Product
            </Typography>
            <TextField
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Show the potential buyers the perks of this products!"
              sx={{ width: "95vw" }}
              multiline
              rows={5}
            />
            <Divider sx={{ mt: 1, mb: 1 }} />
            <FormControl>
              <FormLabel>Select a Category for your Product</FormLabel>
              <RadioGroup
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <Stack
                  direction="row"
                  spacing={10}
                  sx={{ mt: 1 }}
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Electronic Accessories"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="Electronic Devices"
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    label="TV & Home Appliances"
                  />
                </Stack>
                <Stack
                  direction="row"
                  spacing={10}
                  sx={{ mt: 1 }}
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    value={4}
                    control={<Radio />}
                    label="Health & Beauty"
                  />
                  <FormControlLabel
                    value={5}
                    control={<Radio />}
                    label="Babies & Toys"
                  />
                  <FormControlLabel
                    value={6}
                    control={<Radio />}
                    label="Groceries & Pets"
                  />
                </Stack>
                <Stack
                  direction="row"
                  spacing={10}
                  sx={{ mt: 1 }}
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    value={7}
                    control={<Radio />}
                    label="Home & Lifestyle"
                  />
                  <FormControlLabel
                    value={8}
                    control={<Radio />}
                    label="Women's Fashion"
                  />
                  <FormControlLabel
                    value={9}
                    control={<Radio />}
                    label="Men's Fashion"
                  />
                </Stack>
                <Stack
                  direction="row"
                  spacing={10}
                  sx={{ mt: 1 }}
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    value={10}
                    control={<Radio />}
                    label="Fashion Accessories"
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Total Available Quantity for Sale
            </Typography>
            <TextField
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              placeholder="5000"
              sx={{ width: "48vw" }}
            />
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Discount
            </Typography>
            <FormControl>
              <FormLabel>Allow for Discounts?</FormLabel>
              <RadioGroup
                value={productDiscount}
                onChange={(e) => setProductDiscount(e.target.value)}
              >
                <Stack
                  direction="row"
                  spacing={10}
                  sx={{ mt: 1 }}
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
            <Divider sx={{ mt: 1, mb: 1 }} />
          </CardContent>
        </Card>
        <Grid container justifyContent="center" sx={{ mt: 3, mb: 3 }}>
          <Button variant="contained" color="secondary">
            Submit Product
          </Button>
        </Grid>
      </Box>
    </>
  );
}

export default UploadProduct;
