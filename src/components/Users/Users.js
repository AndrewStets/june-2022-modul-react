import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../User/User";
import {getUsersAxios} from "../../services/axios.service";

const Users = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    },[]);

    return (
        <div>
            {users.map(user => (<User key={user.id} item={user}/>))}
        </div>
    );
};

export default Users;



        // userService.getAll().then(({data}) => {
        //     const filter = data.filter(user => user.id < 5);
        //  setUsers(filter);
        // });
