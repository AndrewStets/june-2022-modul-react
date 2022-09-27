import {NavLink} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, email, postId} = comment;

    return (
        <div>
            <hr/>
            <div>
            <h3>{id} -- {email}</h3>
            </div>
            <div>
                <NavLink to={postId.toString()}>Get Post</NavLink>
            </div>
        </div>
    );
};

export {Comment};