import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import FriendsList from './FriendsList';
import Form from './Form';




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

const Header = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
    font-family: 'Lobster', cursive;
    font-size: 2rem;
    font-weight: lighter;
    padding: 0 0 0 1rem;
    margin: 0 0 3rem 0;
border: 1px solid black;
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


const Home = ({ friendDb, AddFriend }) => {
    return (
        <Container>
        <Link to='/'>
        <Header>
            My FriendsList
        </Header>
        </Link>
        <FriendSection>
        {friendDb.map(friend=>{
            return <FriendsList key={friend.id} friend={friend}/>
        })}
        </FriendSection>
        
        <Form AddFriend={AddFriend}/>
        </Container>
    )
}

export default Home;