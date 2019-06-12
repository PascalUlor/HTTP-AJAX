import React from "react";
import { Link } from "react-router-dom";

const FriendsList = ({ friend }) => {
  return (
    <div>
      <Link to={`/${friend.id}`}>
        <div>
          <p>
            {friend.name}
            <span />
          </p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      </Link>
    </div>
  );
};

export default FriendsList;
