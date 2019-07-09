import React from 'react';
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import FriendsList from './FriendsList';
// import Form from './Form';




const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: #fafafa;
margin: 0 auto;
margin-top: 0;
`;


const FriendSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 100%;
height: 100%;
margin: 0 auto;
margin-top: 0;
`;


const Home = ({ friendDb, DeleteFriend }) => {
    return (
        <Container>
        <FriendSection>
        {friendDb.map(friend=>{
            return <FriendsList key={friend.id} friend={friend} DeleteFriend={DeleteFriend}/>
        })}
        </FriendSection>
        
        {/* <Form AddFriend={AddFriend} /> */}
        </Container>
    )
}

export default Home;