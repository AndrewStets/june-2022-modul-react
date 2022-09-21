import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue}  = useForm({node:''});

    const submit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model', {required: true})}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year',  {valueAsNumber: true})}/>
            <button>Save</button>
        </form>
    );
};

export default CarForm;