import React from "react";
import { Card, Text, Title, Image, Container, Grid } from "@mantine/core";
import LoginButton from "./LoginButton";
import "./css/RocketMainPage.css";

export default function RocketMainPage() {
  return (
    <div className="Rocket-main-page">
      <div className="Login-btn">
        <LoginButton />
      </div>
    </div>
  );
}
