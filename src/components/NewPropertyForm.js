import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../constants";

const NewPropertyForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [shippingDetails, setShippingDetails] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "title":
        setTitle(event.target.value);
        break;
      case "category":
        setCategory(event.target.value);
        break;
      case "condition":
        setCondition(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "shippingDetails":
        setShippingDetails(event.target.value);
        break;
      default:
    }
  };

  const handleSubmit = (event) => {
    // Prevent default form redirect on submission
    event.preventDefault();

    // Send request to create new listing in backend
    axios
      .post(`${BACKEND_URL}/listings`, {
        title,
        category,
        condition,
        price,
        description,
        shippingDetails,
      })
      .then((res) => {
        // Clear form state
        setTitle("");
        setCategory("");
        setCondition("");
        setPrice(0);
        setDescription("");
        setShippingDetails("");

        // Navigate to listing-specific page after submitting form
        navigate(`/listings/${res.data.id}`);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Home Type</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Apartment, Detached, Farmland, Houseboat etc"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Total Occupancy</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={category}
          onChange={handleChange}
          placeholder="No. of max occupants allowed"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Total Bedrooms</Form.Label>
        <Form.Control
          type="text"
          name="condition"
          value={condition}
          onChange={handleChange}
          placeholder="No. of bedrooms"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Total Bathrooms</Form.Label>
        <Form.Control
          type="text"
          name="condition"
          value={condition}
          onChange={handleChange}
          placeholder="No. of bathrooms"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Summary</Form.Label>
        <Form.Control
          type="text"
          name="condition"
          value={condition}
          onChange={handleChange}
          placeholder="Short description here"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="condition"
          value={condition}
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
          placeholder="999"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Bought 2 months ago, selling because switching to Android."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shipping Details</Form.Label>
        <Form.Control
          as="textarea"
          name="shippingDetails"
          value={shippingDetails}
          onChange={handleChange}
          placeholder="Same day shipping, we can message to coordinate!"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        List this item
      </Button>
    </Form>
  );
};

export default NewPropertyForm;
