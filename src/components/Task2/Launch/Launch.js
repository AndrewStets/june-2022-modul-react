import React from 'react';

const Launch = (props) => {
    const {item:launch}=props

    return (
        <div className='launch'>
            <h3>{launch.mission_name}<br/>{launch.launch_year}</h3>
            <img src={launch.links.mission_patch_small}/>

        </div>
    );
};
export default Launch;