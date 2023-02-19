import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReviewForm = (props) => {
  const [review, setReview] = useState("");
  const handleChange = (event) => {
    setReview(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const userIndex = props.userIndex;
    const reviewData = {
      revieweeId: userIndex,
      reviewerId: 4,
      description: review,
      rating: 3,
    };
    axios.post(`${process.env.REACT_APP_API_SERVER}`, reviewData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your review of {props.user} here:{" "}
        <input
          key="reviewInput"
          type="text"
          name="review"
          value={review}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};

const UserReviews = (props) => {
  return (
    <div>
      {props.userReviews.map((review) => (
        <p key={review.id}>Review: {review.description}</p>
      ))}
    </div>
  );
};

export function User() {
  const [accessToken, setAccessToken] = useState("");
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();
  const [user, setUser] = useState(null);
  const [userIndex, setUserIndex] = useState();
  const [userReviews, setUserReviews] = useState();

  const checkUser = async () => {
    if (isAuthenticated) {
      let token = getAccessTokenSilently();
      setAccessToken(token);
    } else {
      loginWithRedirect();
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  const params = useParams();
  if (userIndex !== params.id) {
    setUserIndex(params.id);
  }

  useEffect(() => {
    if (userIndex) {
      axios
        .get(`${process.env.REACT_APP_API_SERVER}/users/${userIndex}`)
        .then((response) => {
          setUser(response.data);
        });
    }
  }, [userIndex]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/users/${userIndex}/reviews`)
      .then((response) => {
        setUserReviews(response.data);
      });
  }, [userReviews, userIndex]);

  return (
    <div>
      {user ? (
        <div>
          <p>
            <b>Name:</b> {user.firstName} {user.lastName}
          </p>
          <p>
            <b>Company:</b> {user.company}
          </p>
          <div>
            <u>
              <b>Reviews</b>
            </u>
            <UserReviews userReviews={userReviews} />
          </div>
          <ReviewForm userIndex={userIndex} />
        </div>
      ) : (
        "Error: User not found"
      )}
    </div>
  );
}
