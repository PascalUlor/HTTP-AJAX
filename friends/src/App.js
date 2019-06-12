import React, { Component } from 'react';
import axios from 'axios';
import Home from './component/Home';

const baseUrl = 'http://localhost:5000/friends';
class App extends Component{
  constructor() {
    super()
    this.state = {
      friends: ''
    }
  }

  FetchFriends() {
    axios.get(`${baseUrl}`)
    .then(res =>{
      console.log("======",res);
      this.setState({
        friends: res.data
      })
    }).catch(err=> console.log("---------",err));
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
      .catch(err=> console.log(err));
  }

  componentDidMount() {
    this.FetchFriends();
  }

  render() {
    return (
      <div>
        {/* {this.state.friends !== '' ? <Home friendDb = {this.state.friends} />:
        null}  */}
        {this.state.friends && <Home friendDb = {this.state.friends}
        AddFriend={this.AddFriends}
        />}
      </div>
    );
  }
 
}

export default App;
