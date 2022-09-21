import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <UserForm/>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим
// запитом на http://jsonplaceholder.typicode.com/users
//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар
//     постовим запитом на http://jsonplaceholder.typicode.com/comments