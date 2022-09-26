import React, {useEffect, useState} from 'react';
import Album from "../Album/Album";

const Albums = () => {

    const [albums,setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(value => value.json())
            .then(value => { setAlbums(value)
            });
    }, []);
    console.log(albums);
    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export default Albums;