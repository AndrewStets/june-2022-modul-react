import React, {useEffect, useState} from 'react';

import User from "../User/User";

const Users = () => {

    let [Users,setUsers] = useState([]);
    // let [User,setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        });
    },[]);
    return (
        <div>
            {Users.map(user => (<User item={user} key={user.id}/>))}
        </div>
    );
};
export default Users;