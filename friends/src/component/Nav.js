import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";



const HeaderStyle = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
    font-family: 'Lobster', cursive;
    font-size: 2rem;
    font-weight: lighter;
    padding: 0 0 0 1rem;
    margin: 0 0 3rem 0;
border: 1px solid black;
margin: 0 auto;
`;

const Header = ({ props }) =>{
return (
    <div>
        <Link to='/'>
        <HeaderStyle>
            My FriendsList
        </HeaderStyle>
        </Link>
        <Link to='/addfriend'>
        <HeaderStyle>
            Add Friends
        </HeaderStyle>
        </Link>
        <Link to='/update'>
        <HeaderStyle>
            Update Friends Details
        </HeaderStyle>
        </Link>
    </div>
)
}

export default Header;