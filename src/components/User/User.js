import React from 'react';

const User = ({user, getPosts}) => {

    return (
        <div>
            <h3>Id : {user.id}</h3>
            <h3>Name : {user.name}</h3>
            <h3>Username : {user.username}</h3>
            <button onClick={() => {getPosts(user.id)}}>Get Posts</button>
        </div>
    );
};

export default User;