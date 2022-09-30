import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {getUsersAxios} from "../../services/axios.service";
import {getPosts, Posts} from "../Posts/Posts";


const Users = () => {

    const [users,setUsers] = useState([]);

    const lift = () => {

    };

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    },[]);

    return (
        <div>
            {
                users.map(user => (<User key={user.id} item={user} getPosts={getPosts()} lift={lift()}/>))
            }
        </div>
    );
};

export default Users;



        // userService.getAll().then(({data}) => {
        //     const filter = data.filter(user => user.id < 5);
        //  setUsers(filter);
        // });