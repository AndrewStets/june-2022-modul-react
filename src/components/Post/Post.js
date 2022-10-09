import {useDispatch} from "react-redux";
import {postActions} from "../../redux";

function Post({post}) {

  const {userId, id, title, body} = post;

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>userId : {userId}</div>
        <div>id : {id}</div>
        <div>title : {title}</div>
        <div>body : {body}</div>
      </div>
      <div>
        <button onClick={()=>dispatch(postActions.setCurrentPost(post))}>Set Post</button>
        <button onClick={()=>dispatch(postActions.getById({id}))}>Current Post</button>
      </div>
        <hr/>
    </div>
  );
}

export {Post};