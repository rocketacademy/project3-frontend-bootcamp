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
    email: "",
    firstName: "",
    profilePic: null,
  });

  const [countdown, setCountdown] = useState(5);
  const [showFailedAlert, setShowFailedAlert] = useState(false);

  useEffect(() => {
    // Retrieve token from localStorage, if it's null retrieve from URL search params
    const token =
      localStorage.getItem("token") ??
      (() => {
        const tokenRetrieved = new URLSearchParams(window.location.search).get(
          "token",
        );
        if (tokenRetrieved) {
          localStorage.setItem("token", tokenRetrieved);
        }
        return tokenRetrieved;
      })();
    console.log("Token Retrieved", token);

    if (token) {
      // Verify token and retrieve info
      axios
        .get(`${BACKEND_URL}/auth/verify?token=${token}`)
        .then((response) => {
          const { id, email, firstName, profilePic } = response.data;
          setFormInfo({
            ...formInfo,
            id: id,
            email: email,
            firstName: firstName,
            profilePic: profilePic,
          });
        })
        .catch((error) => {
          console.log("Token not valid");
          localStorage.removeItem("token"); // Remove existing tokens if not valid
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
        {showFailedAlert && <InvalidTokenAlert countdown={countdown} />}
      </div>

      <NavBar name={formInfo.firstName} />

      <Dashboard />
      <Outlet />
      <p className="text-[20px] text-white">email:{formInfo.email}</p>
      <NewApplication />
    </div>
  );
}
