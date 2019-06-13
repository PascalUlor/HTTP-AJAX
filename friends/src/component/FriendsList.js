import React from "react";
import { Link } from 'react-router-dom';
import FriendCard from "./FriendCard";
// import styled from "styled-components";

const FriendsList = ({ friend, DeleteFriend }) => {
  return (
    <Link to={`/${friend.id}`}>
    <FriendCard friend={friend} DeleteFriend={DeleteFriend}/>
    </Link>
  );
};

export default FriendsList;
