import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import User from "../User/User";

const Users = ({getPosts}) => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))
    },[]);

    return (
        <div>
            {
                users.map(user => (<User key={user.id} user={user} getPosts={getPosts}/>))
            }
        </div>
    );
};

export default Users;