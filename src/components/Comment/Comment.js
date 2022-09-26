import React from 'react';
import {Link} from "react-router-dom";

import {PostDetails} from "../PostDetails/PostDetails";

const Comment = ({comment}) => {
    const {id, name, email, postId} = comment;

    return (
        <div>
            <div>postId: {postId} </div>
            <div>id: {id} </div>
            <div>name: {name} </div>
            <div>email: {email} </div>
            <div>
                <Link to={`posts/${postId}`}>PostDetails</Link>
            </div>
            <hr/>
        </div>
    );
};

export default Comment;