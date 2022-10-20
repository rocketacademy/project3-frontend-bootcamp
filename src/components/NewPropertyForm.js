import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../constants";

const NewPropertyForm = () => {
  const [homeType, setHomeType] = useState("");
  const [totalOccupancy, setTotalOccupancy] = useState("");
  const [totalBedrooms, setTotalBedrooms] = useState("");
  const [totalBathrooms, setTotalBathrooms] = useState("");
  const [summary, setSummary] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "homeType":
        setHomeType(event.target.value);
        break;
      case "totalOccupancy":
        setTotalOccupancy(event.target.value);
        break;
      case "totalBedrooms":
        setTotalBedrooms(event.target.value);
        break;
      case "totalBathrooms":
        setTotalBathrooms(event.target.value);
        break;
      case "summary":
        setSummary(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      default:
    }
  };

  const handleSubmit = (event) => {
    // Prevent default form redirect on submission
    event.preventDefault();

    // Send request to create new listing in backend
    axios
      .post(`${BACKEND_URL}/properties`, {
        homeType,
        totalOccupancy,
        totalBedrooms,
        totalBathrooms,
        summary,
        address,
        price,
      })
      .then((res) => {
        // Clear form state
        setHomeType("");
        setTotalOccupancy("");
        setTotalBedrooms("");
        setTotalBathrooms(0);
        setSummary("");
        setAddress("");
        setPrice("");

        // Navigate to listing-specific page after submitting form
        navigate(`/properties/${res.data.id}`);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Home Type</Form.Label>
        <Form.Control
          type="text"
          name="homeType"
          value={home_Type}
          onChange={handleChange}
          placeholder="Apartment, Detached, Farmland, Houseboat etc"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Total Occupancy</Form.Label>
        <Form.Control
          type="text"
          name="totalOccupancy"
          value={totalOccupancy}
          onChange={handleChange}
          placeholder="No. of max occupants allowed"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Total Bedrooms</Form.Label>
        <Form.Control
          type="text"
          name="totalBedrooms"
          value={totalBedrooms}
          onChange={handleChange}
          placeholder="No. of bedrooms"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Total Bathrooms</Form.Label>
        <Form.Control
          type="text"
          name="totalBathrooms"
          value={totalBathrooms}
          onChange={handleChange}
          placeholder="No. of bathrooms"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Summary</Form.Label>
        <Form.Control
          type="text"
          name="summary"
          value={summary}
          onChange={handleChange}
          placeholder="Short description here"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          placeholder="Enter address here"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price ($)</Form.Label>
        <Form.Control
          type="text"
          name="price"
          value={price}
          onChange={handleChange}
          placeholder="2000"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        List this property!
      </Button>
    </Form>
  );
};

export default NewPropertyForm;
