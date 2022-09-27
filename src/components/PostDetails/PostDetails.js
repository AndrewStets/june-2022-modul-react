import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const PostDetails = () => {
    const {postId} = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`+postId)
                        .then(value => value.json())
                        .then(value => {
                            setPost({...value});
                        });
    },[postId]);
    return (
        <div>

            {
                JSON.stringify(post)
            }
        </div>
    );
};

export default PostDetails;