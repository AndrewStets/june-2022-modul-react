import {getPostsAxios} from "../../services/axios.service";
import {useEffect, useState} from "react";

    const Posts = () => {

        const [post,setPost] = useState(null);

useEffect(() => {
        getPostsAxios(id).then(value => setPost(value))

    },[]);

    return (<div>
                    {

                    }
            </div>
        );
};

export {Posts};