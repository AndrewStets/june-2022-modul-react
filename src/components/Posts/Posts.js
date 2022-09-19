import {getPostsAxios} from "../../services/axios.service";
import {useState} from "react";

const [posts,setPosts] = useState(null);


const getPosts = (id) => {
    getPostsAxios(id).then(value => setPosts(value.data))
};

export {getPosts};