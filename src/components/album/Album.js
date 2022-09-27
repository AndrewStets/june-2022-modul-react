const Album = ({album}) => {
    const {id, title} = album;

    return (
        <div>
            <h3>{id} -- {title}</h3>
        </div>
    );
};

export {Album};