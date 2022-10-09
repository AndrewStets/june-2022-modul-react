import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {axiosService, postService} from "../../services";
import {postActions} from "../../redux";
import {Post} from "../Post/Post";

function Posts() {

  const dispatch = useDispatch();

  const {posts, postFromAPI} = useSelector(state => state.postReducer);

  useEffect(() => {
    // postService.getAll().then(({data})=>dispatch(postActions.getAll(data)))
    dispatch(postActions.getAll())
  },[]);

  return (
      <div>
        {
          postFromAPI&& postFromAPI.title
        }
        {
          posts.map(post => <Post key={post.id} post={post}/>)
        }
      </div>
  );
}

export {Posts};