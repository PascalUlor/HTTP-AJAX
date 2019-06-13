import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Home from './component/Home';
import Friend from './component/Friend';
import Header from './component/Nav';
import Form from './component/Form';

const baseUrl = 'http://localhost:5000/friends';

/**
 * Styles
 */

const Bars = keyframes`
    0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 6rem;
  }`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  width: 6rem;
  height: 64px;
  margin: 10rem auto;
div {
  display: flex;
  justify-content: center;
  align-content: center;
  /* position: absolute; */
  margin: 10rem auto;
  left: 6px;
  width: 1rem;
  background: #000;
  animation: ${Bars} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
`;
class App extends Component{
  constructor() {
    super()
    this.state = {
      friends: '',
      errorMessage: '',
      loader: false,
    }
  }

  FetchFriends() {
    this.setState({loader: true})
    axios.get(`${baseUrl}`)
    .then(res =>{
      this.setState({
        friends: res.data
      });
    })
    .catch(err=> {
      console.log("---------",err);
    this.setState({errorMessage: `Something went wrong. Ref: ${err}`})})
    .finally(()=> this.setState({loader: false}));
  }

  AddFriends(dataInput) {
    axios({
      method: 'post',
      url: `${baseUrl}`,
      data: dataInput,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(res=> {
        this.setState({
          friends: res.data
        })
      })
      .catch(err=> {
        console.log("---------",err);
      this.setState({errorMessage: `Something went wrong. Ref: ${err}`})});
  }

  UpdateFriendDeets(dataInput){
    axios.put(`${baseUrl}/${dataInput.id}`, dataInput)
    .then(res=>{
      this.setState({friends: res.data});
    }).catch(err=> {
      console.log("---------",err);
    this.setState({errorMessage: `Something went wrong. Ref: ${err}`})})
  }

  componentDidMount() {
    this.FetchFriends();
  }

  render() {
    return (
      <div>
      <Header />
      <Route 
      exact
        path='/'
        render = {props => this.state.friends && <Home 
        {...props}
        friendDb = {this.state.friends}
        AddFriend={this.AddFriends}
        />}
      />

      <Route 
        path='/:id'
        render = {props => <Friend 
        {...props} UpdateFriend={this.UpdateFriendDeets}
        title='Update Friend'
        />}
      />
      <Route 
        path='/addfriend'
        render = {props => <Form 
          AddFriend={this.AddFriends} title='Add Friend'
        />}
      />

    {/* <Route 
        path='/update'
        render = {props => <Form 
          UpdateFriend={this.UpdateFriendDeets} title='Update Friend'
        />}
      /> */}
        
        {
          this.state.loader &&
          <Loader><div></div><div></div><div></div></Loader>
        }
      </div>
    );
  }
 
}

export default App;
