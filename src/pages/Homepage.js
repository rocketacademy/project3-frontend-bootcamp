import React, { useState, useEffect } from "react";
import Hero from "../images/hero-image.png";
import {
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import Books from "../images/category-books.png";
import Furniture from "../images/category-furniture.png";
import HandBag from "../images/category-handbag.png";
import Sneakers from "../images/category-sneakers.png";
import Tech from "../images/category-tech.png";
import Travel from "../images/category-travel.png";
import HomepodMini from "../images/deals-homepodmini.png";
import InstaxMini9 from "../images/deals-instaxmini9.png";
import BaseCampDuffelM from "../images/deals-basecampduffelm.png";
import FurnitureSaves from "../images/furniture-saves.png";
import BooksSaves from "../images/book-saves.png";
import ClothesSaves from "../images/clothes-saves.png";
import BackpacksSaves from "../images/backpacks-saves.png";
import ProductCard from "../Components/ProductCard";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useUserContext } from "../Components/UserContext";

const Homepage = () => {
  const { loginWithRedirect, getAccessTokenSilently, user, isAuthenticated } =
    useAuth0();
  const [accessToken, setAccessToken] = useState("");
  const { setCurrUser, currUser } = useUserContext();

  const categories = [
    { image: Books, name: "Books" },
    { image: Furniture, name: "Furniture" },
    { image: HandBag, name: "Fashion accesories" },
    { image: Sneakers, name: "Women's fashion" },
    { image: Tech, name: "Electronic Devices" },
    { image: Travel, name: "Travel" },
  ];

  const deals = [
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
  const saves = [
    {
      save: 100,
      description: "Explore Our Furniture & Home Furnishing Page",
      image: FurnitureSaves,
      color: "#f2e4d9",
    },
    {
      save: 29,
      description: "Explore Our Furniture & Home Furnishing Page",
      image: BooksSaves,
      color: "#f9dcdc",
    },
    {
      save: 67,
      description: "Explore Our Furniture & Home Furnishing Page",
      image: ClothesSaves,
      color: "#f2e4d9",
    },
    {
      save: 59,
      description: "Explore Our Furniture & Home Furnishing Page",
      image: BackpacksSaves,
      color: "#d2f7ec",
    },
  ];

  useEffect(() => {
    const checkLogin = async () => {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: process.env.REACT_APP_AUDIENCE,
          scope: process.env.REACT_APP_SCOPE,
        },
      });
      setAccessToken(accessToken);
      // }
      console.log("Access Token : ", accessToken);
      console.log("User: ", user);
      if (
        isAuthenticated &&
        accessToken !== null &&
        typeof user.email !== "undefined"
      ) {
        // post to db
        const userInfo = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/users/login`,
          user
        );
        console.log(userInfo.data.checkedUser);
        if (userInfo != null) {
          setCurrUser(userInfo.data.checkedUser);
        }
      }
    };
    checkLogin();
  }, [user, isAuthenticated]);

  useEffect(() => {
    if (accessToken !== null) {
      localStorage.setItem("Token", JSON.stringify(accessToken));
    }
  }, [accessToken]);

  useEffect(() => {
    if (currUser !== null || currUser !== "") {
      localStorage.setItem("currUser", JSON.stringify(currUser));
    }
  }, [currUser]);

  useEffect(() => {
    console.log(setCurrUser);
  }, [setCurrUser]);

  return (
    <>
      {/* Hero */}
      <Box
        className="hero"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: {
            xl: "70vh",
          },
          overflow: "hidden",
        }}
      >
        <img src={Hero} alt="hero" />
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            left: {
              xs: "16%",
              lg: "5%",
            },
            bottom: "0%",
            transform: "translate(-50%, -50%)",
          }}
        >
          SHOP NOW
        </Button>
      </Box>

      {/* Top Categories */}
      <Box className="top-categories" sx={{}}>
        <Typography
          variant="h2"
          sx={{ p: "20px 0 20px 0", overflow: "hidden" }}
        >
          SHOP OUR TOP CATEGORIES
        </Typography>
        <Box sx={{ p: "20px" }}>
          <Grid container spacing={2}>
            {categories.map((category, index) => (
              <Grid item xs={4} sm={6} md={4} lg={2} xl={2} key={index}>
                <Card
                  sx={{
                    height: { xs: "200px", sm: "250px" },
                    width: { xs: "100%", sm: "200px" },
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      position: "absolute",
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    image={category.image}
                    alt={`image ${index + 1}`}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      top: "10px",
                      left: {
                        xs: "-1",
                        md: "10px",
                      },
                      color: "white",
                      padding: "5px",
                    }}
                  >
                    <Typography variant="h5">{category.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Best deals */}
      <Box className="best-deals">
        <Typography variant="h2" sx={{ py: "30px" }}>
          TODAY'S BEST DEALS FOR YOU
        </Typography>
        <Box sx={{ p: "20px 5% 0 5%", margin: "0" }}>
          <Grid container spacing={2}>
            {deals.map((product, index) => (
              <Grid item xs={6} md={4} key={index}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/*  Get Up to 50% Off */}
      <Box sx={{ p: "20px" }}>
        <Typography variant="h2" sx={{ py: "20px" }}>
          GET UP TO 50% OFF
        </Typography>
        <Grid container spacing={4}>
          {saves.map((save, i) => (
            <Grid
              item
              xs={6}
              md={6}
              xl={3}
              key={i}
              sx={{ margin: "0", padding: "0" }}
            >
              <Card
                sx={{
                  height: "97%",
                  backgroundColor: save.color,
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Save
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    ${save.save}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {save.description}
                  </Typography>
                </CardContent>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={save.image}
                    alt={i + save.image}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          height: "500px",
          width: "100%",
          backgroundColor: "primary.main",
          overflow: "hidden",
        }}
      ></Box>
    </>
  );
};

export default Homepage;
