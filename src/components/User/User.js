import React from 'react';

const User = (props) => {

    const {item:user} = props;

    return (
        <div>
            <h3>id : {user.id}</h3>
            <h3>name : {user.name}</h3>
            <h3>username : {user.username}</h3>
            <button onClick={()=>{

            }}>Posts</button>
        </div>
    );
};

export default User;