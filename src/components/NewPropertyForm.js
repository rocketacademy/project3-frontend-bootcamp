import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { push, ref as databaseRef, set } from "firebase/database";
import { database, storage } from "../firebase";

import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../constants";

const UPLOAD_IMAGES_FOLDER_NAME = "images";
const ITEMS_FOLDER_NAME = "items";

const NewPropertyForm = () => {
  const [home_name, setHomeName] = useState("");
  const [image_url, setHomeImage] = useState("");
  const [home_type, setHomeType] = useState("");
  const [total_occupancy, setTotalOccupancy] = useState("");
  const [total_bedrooms, setTotalBedrooms] = useState("");
  const [total_bathrooms, setTotalBathrooms] = useState("");
  const [summary, setSummary] = useState("");
  const [address, setAddress] = useState("");
  const [has_tv, setHasTV] = useState("");
  const [has_kitchen, setHasKitchen] = useState("");
  const [has_aircon, setHasAircon] = useState("");
  const [has_internet, setHasInternet] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const [newUpload, setNewUpload] = useState("");

  const [imageUpload, setImageUpload] = useState({
    imageInputValue: "",
    imageInputFile: null,
  });

  const handleChange = (event) => {
    switch (event.target.name) {
      case "home_name":
        setHomeName(event.target.value);
        break;
      // case "image_url":
      //   const fileRef = storageRef(
      //     storage,
      //     `${UPLOAD_IMAGES_FOLDER_NAME}/${imageUpload.imageInputFile.name}`
      //   );
      //   uploadBytes(fileRef, imageUpload.imageInputFile).then(() => {
      //     getDownloadURL(fileRef).then((downloadUrl) => {
      //       setHomeImage({ image_url: downloadUrl });
      //       setImageUpload({ imageInputValue: "", imageInputFile: null });
      //     });
      //   });
      //   break;
      case "home_type":
        setHomeType(event.target.value);
        break;
      case "total_occupancy":
        setTotalOccupancy(event.target.value);
        break;
      case "total_bedrooms":
        setTotalBedrooms(event.target.value);
        break;
      case "total_bathrooms":
        setTotalBathrooms(event.target.value);
        break;
      case "summary":
        setSummary(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      case "has_tv":
        setHasTV(event.target.value);
        break;
      case "has_kitchen":
        setHasKitchen(event.target.value);
        break;
      case "has_aircon":
        setHasAircon(event.target.value);
        break;
      case "has_internet":
        setHasInternet(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      default:
    }
  };

  const handleImageUpload = (event) => {
    setImageUpload({
      imageInputValue: event.target.value,
      imageInputFile: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    // Prevent default form redirect on submission
    event.preventDefault();

    const fileRef = storageRef(
      storage,
      `${UPLOAD_IMAGES_FOLDER_NAME}/${imageUpload.imageInputFile.name}`
    );
    uploadBytes(fileRef, imageUpload.imageInputFile).then(() => {
      getDownloadURL(fileRef).then((downloadUrl) => {
        axios
          .post(`${BACKEND_URL}/properties`, {
            home_name,
            image_url: downloadUrl,
            home_type,
            total_occupancy,
            total_bedrooms,
            total_bathrooms,
            summary,
            address,
            // has_tv,
            // has_kitchen,
            // has_aircon,
            // has_internet,
            price,
          })
          .then((res) => {
            // Clear form state
            setHomeName("");
            setHomeImage("");
            setHomeType("");
            setTotalOccupancy("");
            setTotalBedrooms("");
            setTotalBathrooms("");
            setSummary("");
            setAddress("");
            // setHasTV("");
            // setHasKitchen("");
            // setHasAircon("");
            // setHasInternet("");
            setPrice("");
            setImageUpload({ imageInputValue: "", imageInputFile: null });
            navigate(`/properties/${res.data.id}`);
          });
      });
      console.log(image_url);
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group class="input-group mt-3 mb-3">
          <Form.Label class="input-group-text" id="inputGroup-sizing-default">
            Property Name
          </Form.Label>
          <Form.Control
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            type="text"
            name="home_name"
            value={home_name}
            onChange={handleChange}
            placeholder="Small cozy log cabin"
          />
          <Form.Group class="input-group mt-3 mb-3">
            <Form.Label class="input-group-text" id="inputGroup-sizing-default">
              Image
            </Form.Label>
            <Form.Control
              type="file"
              name="price"
              value={imageUpload.imageInputValue}
              onChange={handleImageUpload}
            />
          </Form.Group>
        </Form.Group>
        <Form.Group class="input-group mt-3 mb-3">
          <Form.Label class="input-group-text" id="inputGroup-sizing-default">
            Home Type
          </Form.Label>
          <Form.Control
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            type="text"
            name="home_type"
            value={home_type}
            onChange={handleChange}
            placeholder="Apartment, Castle, Farmhouse, Houseboat etc"
          />
        </Form.Group>
        <Form.Group class="input-group mt-3 mb-3">
          <Form.Label class="input-group-text" id="inputGroup-sizing-default">
            Total Occupancy
          </Form.Label>
          <Form.Control
            type="text"
            name="total_occupancy"
            value={total_occupancy}
            onChange={handleChange}
            placeholder="No. of max occupants allowed"
          />
        </Form.Group>
        <Form.Group class="input-group mt-3 mb-3 form-inline">
          <Form.Label class="input-group-text" id="inputGroup-sizing-default">
            Total Bedrooms
          </Form.Label>
          <Form.Control
            type="text"
            name="total_bedrooms"
            value={total_bedrooms}
            onChange={handleChange}
            placeholder="No. of bedrooms"
          />
          <Form.Label class="input-group-text" id="inputGroup-sizing-default">
            Total Bathrooms
          </Form.Label>
          <Form.Control
            type="text"
            name="total_bathrooms"
            value={total_bathrooms}
            onChange={handleChange}
            placeholder="No. of bathrooms"
          />
        </Form.Group>
        <Form.Group class="input-group mt-3 mb-3">
          <Form.Label class="input-group-text" id="inputGroup-sizing-default">
            Summary
          </Form.Label>
          <Form.Control
            type="text"
            name="summary"
            value={summary}
            onChange={handleChange}
            placeholder="Short description here"
          />
        </Form.Group>
        <Form.Group class="input-group mt-3 mb-3">
          <Form.Label class="input-group-text" id="inputGroup-sizing-default">
            Address
          </Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Enter address here"
          />
        </Form.Group>
        <Form class="input-group mt-3 mb-3">
          {/* <Form.Label class="input-group-text" id="inputGroup-sizing-default">
            Facilities
          </Form.Label> */}
          <br />
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Has TV"
                name="has_tv"
                value={has_tv}
                type={type}
                // id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Has kitchen"
                value={has_kitchen}
                name="has_kitchen"
                type={type}
                // id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Has Aircon"
                value={has_aircon}
                name="has_aircon"
                type={type}
                // id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Has Internet"
                value={has_internet}
                name="has_internet"
                // type should be boolean or integer
                // need to push when {toggleChange}
                type={type}
                // id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form>

        <Form.Group class="input-group mt-3 mb-3">
          <Form.Label class="input-group-text" id="inputGroup-sizing-default">
            Price ($)
          </Form.Label>
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
    </div>
  );
};

export default NewPropertyForm;
