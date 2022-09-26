
const Album = ({album}) => {
    const {id, title} = album;

    return (
        <div>
            <h3>id : {id}</h3>
            <h3>title : {title}</h3>
            <hr/>
        </div>
    );
};

export default Album;