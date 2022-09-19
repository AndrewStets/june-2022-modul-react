import {getPostsAxios} from "../../services/axios.service";
import {useEffect, useState} from "react";

    const Posts = (id) => {

        const [posts,setPosts] = useState(null);

useEffect(() => {
        getPostsAxios(id).then(value => setPosts(value))
    },[]);

    return (<div>
                    {

                    }
            </div>
        );
};

export {Posts};