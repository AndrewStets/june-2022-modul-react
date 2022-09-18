import React, {useEffect, useState} from 'react';
import Launch from "../Launch/Launch";

const Launches = () => {

    let [launches,setLaunches] = useState([]);

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then(value => value.json())
            .then(value => {
                let filter = value.filter(launch => launch.launch_year !== '2020');
                setLaunches(filter);
            });
    }, []);


    return (
        <div>
            {launches.map(launch =>(<Launch item={launch} key={launch.flight_number}/>))}
        </div>
    );
};

export default Launches;