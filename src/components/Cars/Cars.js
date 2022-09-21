import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import car from "../Car/Car";
import Car from "../Car/Car";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(({data})=> setCars(data))
    })

    return (
        <div>
            {
                cars.map(car=> <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default Cars;