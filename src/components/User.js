import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Profile } from "./User Pages/Profile";

export function User() {
  const params = useParams();
  const [accessToken, setAccessToken] = useState("");
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();
  const [user, setUser] = useState(null);
  const [userIndex, setUserIndex] = useState();
  const [userReviews, setUserReviews] = useState();

  useEffect(() => {
    if (userIndex) {
      axios.get(`http://localhost:3000/users/${userIndex}`).then((response) => {
        setUser(response.data);
      });
      axios
        .get(`http://localhost:3000/users/${userIndex}/reviews`)
        .then((response) => {
          setUserReviews(response.data);
        });
    }
  }, [userIndex]);

  if (userIndex !== params.id) {
    setUserIndex(params.id);
  }

  return (
    <div>
      {user ? (
        <div>
          <Profile user={user} />
          <p>
            <u>
              <b>Reviews</b>
            </u>
            {userReviews.map((review) => (
              <p>Review: {review.description}</p>
            ))}
          </p>
        </div>
      ) : (
        "Error: User not found"
      )}
    </div>
  );
}
