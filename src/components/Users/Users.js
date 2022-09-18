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
            <div>
                {user && <div className='inform'><h2>{user.name}<br/>{user.username}<br/>{user.email}</h2></div>}
                {users.map(user => (<User item={user} key={user.id} lift={lift}/>))}
            </div>
        );
    };

export default Users;