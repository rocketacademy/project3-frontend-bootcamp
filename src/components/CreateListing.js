import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { BACKEND_URL } from "../constants";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { Stack, TextField, Typography } from "@mui/material";
/* import Typography from '@mui/joy/Typography'; */
/* import Card from "@mui/joy/Card"; */
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import Select from "react-select";
import { toast } from "react-toastify";
import NavBar from "./NavBar";

const CreateListing = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, isLoading } = useAuth0();
  const accessToken = localStorage.getItem("accessToken");

  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [state, setState] = useState({
    user_id: "",
    title: "",
    price: "",
    description: "",
    shipping_detail: "",
    sku_number: "",
    quantity: "",
    photo_url_1: "",
    photo_url_2: "",
    photo_url_3: "",
  });

  // WHEN USER FIRST ACCESSES THIS PAGE: GET USER ID AND STORE IN LOCAL STATE:
  // GET USER ID ON MOUNT, USE EMAIL TO FISH OUT THE ID:
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
    if (isAuthenticated && user) {
      console.log("user email:", user.email);

      const checkUserInfoExists = async () => {
        try {
          const response = await axios.get(
            `${BACKEND_URL}/users/checkuserinfo?email=${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log(response.data);
          // Check the response to determine if the project exists
          if (!response.data.error) {
            console.log("user info exists!");
            setState({ user_id: response.data.id });
          } else {
            console.log("user info does not exist!");
          }
        } catch (error) {
          console.error(
            "Error occurred while checking user info exists on db:",
            error
          );
        }
      };
      checkUserInfoExists();
    }
  }, [user?.email, accessToken, isAuthenticated]);

  console.log("state.user_id:", state.user_id);

  // LOGIC FOR SUBMIT BUTTON:
  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract category IDs to send to backend
    const selectedCategoryIDs = selectedCategories.map(({ value }) => value);
    console.log(selectedCategoryIDs);

    // FIREBASE LOGIC GOES HERE: (need to call the FIREBASE URL up and store it here first before pushing it into backend)

    // Perform form submission actions to the backend:
    axios
      .post(
        `${BACKEND_URL}/listings/create`,
        {
          user_id: state.user_id,
          title: state.title,
          price: state.price,
          description: state.description,
          shipping_detail: state.shipping_detail,
          sku_number: state.sku_number,
          quantity: state.quantity,
          selectedCategoryIDs,
          photo_url_1: state.photo_url_1,
          photo_url_2: state.photo_url_2,
          photo_url_3: state.photo_url_3,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setState({
          user_id: "",
          title: "",
          price: "",
          description: "",
          shipping_detail: "",
          sku_number: "",
          quantity: "",
          photo_url_1: "",
          photo_url_2: "",
          photo_url_3: "",
        });
        setSelectedCategories([]);

        navigate(`/listings`);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log({
      user_id: state.user_id,
      title: state.title,
      price: state.price,
      description: state.description,
      shipping_detail: state.shipping_detail,
      sku_number: state.sku_number,
      quantity: state.quantity,
      selectedCategoryIDs,
      photo_url_1: state.photo_url_1,
      photo_url_2: state.photo_url_2,
      photo_url_3: state.photo_url_3,
    });
    return console.log("you've submitted user info!");
  };

  // Handle Change for field inputs:
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
    console.log(state);
  };

  // LOGIC REQUIRED FOR HANDLING CATEGORY SUBMISSIONS:
  // call all the categories first upon page loading:
  useEffect(() => {
    const getAllCategories = async () => {
      const categories = await axios.get(`${BACKEND_URL}/categories`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(getAllCategories);
      setAllCategories(categories.data);
      console.log(categories);
    };
    getAllCategories();
  }, []);

  console.log("all categories in local state:", allCategories);
  // categoryOptions for Category form input selection:
  const categoryOptions = allCategories.map((category) => ({
    value: category.id,
    label: category.name,
  }));
  // handle change for category selection form:
  const handleSelectChange = (categories) => {
    setSelectedCategories(categories);
  };
  console.log("selected categories:", selectedCategories);
  // styling colours for the category selection:
  const selectFieldStyles = {
    option: (provided) => ({
      ...provided,
      color: "black",
    }),
  };

  if (isLoading) {
    // Show loading state
    return (
      <div>
        <h1>Loading...Your patience is appreciated.</h1>
      </div>
    );
  }

  return (
    <div>
      <Stack alignItems={"center"} justifyContent={"center"} my={5}>
        <NavBar />
        <>
          <Box m={2} p={2}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Create A New Listing:
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              gutterBottom
            >
              Type in your product details to create a new listing.
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              spacing={2}
              mt={2}
            >
              <TextField
                required
                autoComplete="off"
                value={state.title}
                size="small"
                id="title"
                type="title"
                label="Product Title"
                onChange={handleChange}
              ></TextField>
              <TextField
                required
                autoComplete="off"
                value={state.price}
                size="small"
                id="price"
                type="price"
                label="Price"
                onChange={handleChange}
              ></TextField>
              <TextField
                required
                autoComplete="off"
                value={state.description}
                size="small"
                id="description"
                type="description"
                label="Description"
                onChange={handleChange}
              ></TextField>
              <TextField
                required
                autoComplete="off"
                value={state.shipping_detail}
                size="small"
                id="shipping_detail"
                type="shipping_detail"
                label="Shipping Detail"
                onChange={handleChange}
              ></TextField>
              <TextField
                required
                autoComplete="off"
                value={state.sku_number}
                size="small"
                id="sku_number"
                type="sku_number"
                label="SKU"
                onChange={handleChange}
              ></TextField>
              <TextField
                required
                autoComplete="off"
                value={state.quantity}
                size="small"
                id="quantity"
                type="quantity"
                label="Quantity"
                onChange={handleChange}
              ></TextField>

              <TextField
                required
                autoComplete="off"
                value={state.photo_url_1}
                size="small"
                id="photo_url_1"
                type="photo_url_1"
                label="upload an image (jpg) here"
                onChange={handleChange}
              ></TextField>
              <TextField
                required
                autoComplete="off"
                value={state.photo_url_2}
                size="small"
                id="photo_url_2"
                type="photo_url_2"
                label="upload an image (jpg) here"
                onChange={handleChange}
              ></TextField>
              <TextField
                required
                autoComplete="off"
                value={state.photo_url_3}
                size="small"
                id="photo_url_3"
                type="photo_url_3"
                label="upload an image (jpg) here"
                onChange={handleChange}
              ></TextField>
              <label>
                <Select
                  isMulti
                  styles={selectFieldStyles}
                  options={categoryOptions}
                  value={selectedCategories}
                  onChange={handleSelectChange}
                  placeholder="Categories"
                />
              </label>
              <Button type="submit" variant="contained">
                SUBMIT YOUR LISTING
              </Button>
            </Stack>
          </form>
          <br />
        </>
      </Stack>
    </div>
  );
};
export default CreateListing;
