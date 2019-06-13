import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import Form from './Form';

const baseUrl = 'http://localhost:5000/friends';

export default class Friend extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      friend: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    // const id = 1;
    const id= parseInt(this.props.match.params.id);
    this.FetchFriendById(id);
  }

  FetchFriendById(id) {
    axios.get(`${baseUrl}/${id}`)
    .then(res =>{
      // console.log(res.data)
      this.setState({
        friend: res.data
      });
    })
    .catch(err=> {
      console.log("---------",err);
    this.setState({errorMessage: `Something went wrong. Ref: ${err}`})});
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.FetchFriendById(newProps.match.params.id);
    }
  }

  render() {

    return this.state.friend && <div><FriendCard friend={this.state.friend}/>
    <Form 
    UpdateFriend={this.props.UpdateFriend}
    title={this.props.title}
    friend={this.state.friend}
    />
    </div>;
  }
}
