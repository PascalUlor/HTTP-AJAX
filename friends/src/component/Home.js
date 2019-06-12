import React from 'react';


const Home = ({ friendDb }) => {
    console.table(friendDb);
    return (
        <div>
        {friendDb.map(friend=>{
            console.log("+++++++++",friend)
            return (
                    <div key={friend.id}>
                        {friend.name}
                    </div>
                    )
        })}
        </div>
    )
}

export default Home;