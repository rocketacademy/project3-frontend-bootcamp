import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Reviews() {
  const params = useParams();
  const [userReviews, setUserReviews] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${userIndex}/reviews`)
      .then((response) => {
        setUserReviews(response.data);
      });
  }, [params]);

  return <></>;
}
