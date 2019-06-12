import React, { Component } from 'react';
import axios from 'axios';
import Home from './component/Home';

class App extends Component{
  constructor() {
    super()
    this.state = {
      friends: ''
    }
  }

  FetchFriends() {
    axios.get('http://localhost:5000/friends')
    .then(res =>{
      console.log("======",res);
      this.setState({
        friends: res.data
      })
    }).catch(err=> console.log("---------",err));
  }

  componentDidMount() {
    this.FetchFriends();
  }

  render() {
    return (
      <div>
        {/* {this.state.friends !== '' ? <Home friendDb = {this.state.friends} />:
        null}  */}
        {this.state.friends && <Home friendDb = {this.state.friends} />}
      </div>
    );
  }
 
}

export default App;
