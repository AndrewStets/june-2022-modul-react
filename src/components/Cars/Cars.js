import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import car from "../Car/Car";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, []);

    return (
        <div>
            <CarForm/>
            {
                cars.map(car=> <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default Cars;