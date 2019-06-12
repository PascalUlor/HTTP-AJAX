import React from 'react';
import FriendsList from './FriendsList';
import Form from './Form';


const Home = ({ friendDb }) => {
    console.table(friendDb);
    return (
        <div>
        {friendDb.map(friend=>{
            console.log("+++++++++",friend)
            return <FriendsList key={friend.id} friend={friend}/>
        })}
        <Form />
        </div>
    )
}

export default Home;