import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BACKEND_URL } from "../constant";

export default function Profile() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  // const [user, setUser] = useState();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  });
  return <div>Profile!</div>;
}
