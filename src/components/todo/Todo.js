const Todo = ({todo}) => {
    const {id, title} = todo;

    return (
        <div>
            <h3>{id} -- {title}</h3>
        </div>
    );
};

export {Todo};