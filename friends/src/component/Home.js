import React from 'react';
import FriendsList from './FriendsList';
import Form from './Form';


const Home = ({ friendDb, AddFriend }) => {
    console.table(friendDb);
    return (
        <div>
        {friendDb.map(friend=>{
            console.log("+++++++++",friend)
            return <FriendsList key={friend.id} friend={friend}/>
        })}
        <Form AddFriend={AddFriend}/>
        </div>
    )
}

export default Home;