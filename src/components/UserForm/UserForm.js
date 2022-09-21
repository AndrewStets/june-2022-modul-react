import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services";

const UserForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue}  = useForm({mode:'all'});

    const submit = async (user) => {
        const {data} = await userService.create(user)
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name', {required: true, })}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'date'} {...register('property.date')}/>
            <button>Save</button>
        </form>
    );
};

export default UserForm;