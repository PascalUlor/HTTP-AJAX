import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30rem;
height: 10rem;
background-color: lightseagreen;
margin: 0 2rem;
margin-top: 2rem;
border-radius: 1rem;
a {
    text-decoration: none;
}
`;

const Span = styled.div`
display: flex;
justify-content: flex-end;
span {
  font-weight: bold;
  color: red;
  }
`;

const Text = styled.p`
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
  text-rendering: optimizeLegibility;
  text-rendering: optimizeSpeed;
  color: #000;
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

const FriendsList = ({ friend }) => {
  return (
    <Container>
      <Link to={`/${friend.id}`}>
        <div>
        <Span>
        <span>x</span>
        </Span>
          <Text>
            {friend.name}
          </Text>
          <Text>{friend.age}</Text>
          <Text>{friend.email}</Text>
        </div>
      </Link>
    </Container>
  );
};

export default FriendsList;
