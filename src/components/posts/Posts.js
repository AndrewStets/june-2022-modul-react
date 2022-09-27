import {useEffect, useState} from "react";

import {Post} from "../post/Post";
import {useParams} from "react-router-dom";
import {PostsService} from "../../services";

const Posts = () => {

    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        PostsService.getAll(postId).then(({data}) => setPost(data));
    }, [postId]);

    return (
        <div>
            {
                post && (<Post post={post}/>)
            }
        </div>
    );
};

export {Posts};