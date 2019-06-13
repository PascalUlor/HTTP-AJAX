import React from "react";
import { Link } from 'react-router-dom';
import FriendCard from "./FriendCard";
// import styled from "styled-components";

const FriendsList = ({ friend }) => {
  return (
    <Link to={`/${friend.id}`}>
    <FriendCard friend={friend}/>
    </Link>
  );
};

export default FriendsList;
