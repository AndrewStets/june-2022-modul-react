import {NavLink} from "react-router-dom";

const Headers = () => {
    return (
        <div>
            <div><NavLink to={'albums'}>Album</NavLink></div>
            <div><NavLink to={'comments'}>Comments</NavLink></div>
            <div><NavLink to={'todos'}>Todos</NavLink></div>
        </div>
    );
};

export {Headers};