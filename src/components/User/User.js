import React from 'react';

const User = (props) => {
    const {item:user} = props;

    return (
        <div>
            <h3>Id : {user.id}</h3>
            <h3>Name : {user.name}</h3>
            <h3>Username : {user.username}</h3>
            <button onClick={()=>{

            }}>Posts</button>
        </div>
    );
};

export default User;