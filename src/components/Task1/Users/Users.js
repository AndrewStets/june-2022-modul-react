import React, {useEffect, useState} from 'react';

import User from "../User/User";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift=(obj) => {
        setUser(obj);
    }

        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/`)
                .then(value => value.json())
                .then(value => {
                    setUsers(value);
                });
        }, []);

        return (
            <div className='users'>
                {user && <div className='inform'><h3>Name-{user.name}<br/>Username-{user.username}<br/>Email-{user.email}</h3></div>}
                {users.map(user => (<User item={user} key={user.id} lift={lift}/>))}
            </div>
        );
    };

export default Users;