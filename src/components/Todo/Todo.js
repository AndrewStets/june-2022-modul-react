import React from 'react';

const Todo = ({todo}) => {
    const {id, title} = todo;
    return (
        <div>
            <h3>id : {id}</h3>
            <h3>title : {title}</h3>
            <hr/>
        </div>
    );
};

export default Todo;