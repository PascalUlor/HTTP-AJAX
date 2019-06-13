import React, { useState } from 'react';
import styled from "styled-components";



const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50rem;
background-color: #fafafa;
margin: 0 auto;
margin-top: 0;
`;

const Header = styled.header`
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
    font-family: 'Lobster', cursive;
    font-size: 2rem;
    font-weight: lighter;
    padding: 0 0 0 1rem;
    margin: 0 0 3rem 0;
`;
const FormStyle = styled.form`
  width: 50%;
  height: 40%;
  margin: 5rem auto;
  border: 2px solid lightgrey;
  padding: 4rem;
`;

const FormInput = styled.input`
  color: #000;
  font-weight: 100;
  width: 90%;
  display: block;
  padding: 0.5rem;
  background-color: rgba(242, 241, 239, 1);
  border: 2px solid rgba(242, 241, 239, 1);
  -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background-position: -800px 0;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
  margin: auto;
  margin-bottom: 1em;
  &:focus {
    outline: none;
    border:1px solid rgba(189, 195, 199, 1);
}
`;

const SubmitBtn = styled.input`
  font-size: 0.9em;
  color: #fff;
  background: lightseagreen;
  outline: none;
  border: 1px solid lightseagreen;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5em;
  -webkit-appearance: none;
  width: 100%;
  margin: 2em 0;
  letter-spacing: 4px;
  &:hover {
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all;
    background: skyblue;
  }
`;


const Form =({ AddFriend, UpdateFriend, title, friend })=>{
const [friendInfo, setFriendInfo] = useState({
    name: '',
    age: '',
    email: ''
});

  const postHandler = () => {
    let friendDeets = {
      name: friendInfo.name,
      age: friendInfo.age,
      email: friendInfo.email
    };
    console.log(friendDeets);
  };

  const updateHandler = () => {
    let friendDeets = {
      id: friend.id,
      name: friendInfo.name,
      age: friendInfo.age,
      email: friendInfo.email
    };
    console.log(friendDeets);
    UpdateFriend(friendDeets);
  };

  const handleChange = e => {
    e.persist();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setFriendInfo(friendInfo => ({ ...friendInfo, [name]: value }));
    // setUpdateInfo(friendInfo => ({ ...friendInfo, [name]: value }));
    console.log(friendInfo);
  };

  return (
    <Container>
    { AddFriend && <FormStyle onSubmit={e => postHandler(e)}>
    <Header>{title}</Header>
      <FormInput
        placeholder="name"
        name="name"
        type="text"
        value={friendInfo.name}
        onChange={handleChange}
      />
      <FormInput
        placeholder="age"
        name="age"
        type="text"
        value={friendInfo.age}
        onChange={handleChange}
      />
      <FormInput
        placeholder="email"
        name="email"
        type="email"
        value={friendInfo.email}
        onChange={handleChange}
      />
      <SubmitBtn type="submit" value="Log In" />
    </FormStyle>}

    { friend && <FormStyle onSubmit={e => updateHandler(e)}>
    <Header>{title}</Header>
      <FormInput
        placeholder="name"
        name="name"
        type="text"
        value={friendInfo.name}
        onChange={handleChange}
      />
      <FormInput
        placeholder="age"
        name="age"
        type="text"
        value={friendInfo.age}
        onChange={handleChange}
      />
      <FormInput
        placeholder="email"
        name="email"
        type="email"
        value={friendInfo.email}
        onChange={handleChange}
      />
      <SubmitBtn type="submit" value="Log In" />
    </FormStyle>}
    </Container>
  );
}

export default Form;