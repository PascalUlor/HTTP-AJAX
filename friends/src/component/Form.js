import React, { useState, useEffect } from 'react';
import styled from "styled-components";



const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
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


const Form =({ AddFriend })=>{
const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
});

useEffect(() => {
  }, [newFriend.name, newFriend.age, newFriend.email]);

  const loginHandler = () => {
    let friendDeets = {
      name: newFriend.name,
      age: newFriend.age,
      email: newFriend.email
    };
    console.log(friendDeets);
    AddFriend(friendDeets);
  };

  const handleChange = e => {
    e.persist();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setNewFriend(newFriend => ({ ...newFriend, [name]: value }));
    console.log(newFriend);
  };

  return (
    <Container>
    <FormStyle onSubmit={e => loginHandler(e)}>
    <Header>Add Friend</Header>
      <FormInput
        placeholder="name"
        name="name"
        type="text"
        value={newFriend.name}
        onChange={handleChange}
      />
      <FormInput
        placeholder="age"
        name="age"
        type="text"
        value={newFriend.age}
        onChange={handleChange}
      />
      <FormInput
        placeholder="email"
        name="email"
        type="email"
        value={newFriend.email}
        onChange={handleChange}
      />
      <SubmitBtn type="submit" value="Log In" />
    </FormStyle>
    </Container>
  );
}

export default Form;