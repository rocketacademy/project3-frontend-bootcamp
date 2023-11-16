//-----------Libaries-----------//
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants";

//-----------Components-----------//
import NavBar from "../Details/NavBar";
import Dashboard from "../Components/DashboardPage/Dashboard";
import NewApplication from "../Components/DashboardPage/NewApplication";
import InvalidTokenAlert from "../Details/InvalidTokenAlert";

//-----------Media-----------//

export default function DashboardPage() {
  const navigate = useNavigate();

  const [formInfo, setFormInfo] = useState({
    id: "",
    email: "email1234@email.com",
    firstName: "",
    profilePic: null,
  });

  const [countdown, setCountdown] = useState(5);
  const [showFailedAlert, setShowFailedAlert] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tokenRetrieved = queryParams.get("token");
    console.log("Token Retrieved", tokenRetrieved);
    if (tokenRetrieved) {
      axios
        .get(`${BACKEND_URL}/auth/verify?token=${tokenRetrieved}`)
        .then((response) => {
          const { id, email, firstName, profilePic } = response.data;
          setFormInfo({
            ...formInfo,
            id: id,
            email: email,
            firstName: firstName,
            profilePic: profilePic,
          });
          console.log("Verified User", formInfo);
        })
        .catch((error) => {
          console.log("Token not valid");
          setShowFailedAlert(true);
          const countdownInterval = setInterval(() => {
            setCountdown((prevCount) => prevCount - 1);
          }, 1000);
          setTimeout(() => {
            clearInterval(countdownInterval);
            navigate("/");
          }, 5000);
        });
    }
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-x-auto bg-background">
      <div className="flex w-screen justify-center">
        {<InvalidTokenAlert countdown={countdown} />}
      </div>
      <NavBar />
      <Dashboard />
      <Outlet />
      <NewApplication />
    </div>
  );
}
