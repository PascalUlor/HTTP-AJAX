import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30rem;
height: 5rem;
background-color: lightseagreen;
margin: 0 auto;
margin-top: 2rem;
border-radius: 1rem;
a {
    text-decoration: none;
    /* color: rgba(191, 191, 191, 1); */
}
`;

const Text = styled.p`
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
  text-rendering: optimizeLegibility;
  text-rendering: optimizeSpeed;
  color: #000;
  font-family: 'Lobster', cursive;
  font-size: 1.5rem;
  font-weight: bold;
`;

const FriendsList = ({ friend }) => {
  return (
    <Container>
      <Link to={`/${friend.id}`}>
        <div>
          <Text>
            {friend.name}
            <span />
          </Text>
          <Text>{friend.age}</Text>
          <Text>{friend.email}</Text>
        </div>
      </Link>
    </Container>
  );
};

export default FriendsList;
