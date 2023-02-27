import { useAuth0 } from "@auth0/auth0-react";
import { Alert, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loading.css";

export default function LoadingPage() {
  const navigate = useNavigate();
  const { getAccessTokenSilently, user } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (user && !accessToken) {
      getAccessTokenSilently().then((jwt) => {
        setAccessToken(jwt);
      });
    }
    axios
      .get(`http://localhost:3000/users`, configs)
      .then(function (response) {
        console.log(response.data);
        let userFoundInDatabase = false;
        let retrievedUserId = "";
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].email === user.email) {
            userFoundInDatabase = true;
            retrievedUserId = response.data[i].id;
          }
        }
        if (!userFoundInDatabase) {
          navigate("/createprofile");
        } else {
          navigate(`/${retrievedUserId}/homepage`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user, accessToken]);
  console.log(accessToken);

  const configs = {};
  if (accessToken) configs.headers = { Authorization: `Bearer ${accessToken}` };

  return (
    <div>
      <div className="loading"></div>
      <div className="loadingText">Loading...</div>
      {/* <Spin tip="Loading...">
        <Alert
          message="Please wait..."
          description="Checking for your existence..."
          type="info"
        />
      </Spin> */}
    </div>
  );
}
