const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            <h3>{id} -- {title}</h3>
        </div>
    );
};

export {Post};