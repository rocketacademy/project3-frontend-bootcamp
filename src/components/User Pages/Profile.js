import React, { useState } from "react";
import { addreview } from "../../utilities/utils";

export function Profile({ user }) {
  const [avatar, setAvatar] = useState("");
  const [rating, setRating] = useState(5);

  return (
    <div className="profile">
      <img alt="avatar" src={avatar} />
      <div className="info">
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
        <p>Current Company: {user.company}</p>
      </div>
      <button onClick={addreview}>Add Review</button>
    </div>
  );
}
