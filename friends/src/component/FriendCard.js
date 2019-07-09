import React from "react";
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

const FriendCard = ({ friend, DeleteFriend }) => {
    console.log('=======',friend)

    const deleteHandler =()=>{
        DeleteFriend(friend);
    }
  return (
    <Container>
        <div>
        <Span>
        <span><button onClick={deleteHandler}>Delete</button></span>
        </Span>
          <Text>
            {friend.name}
          </Text>
          <Text>{friend.age}</Text>
          <Text>{friend.email}</Text>
        </div>
    </Container>
  );
};

export default FriendCard;
