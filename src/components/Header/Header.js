import {useSelector} from "react-redux";

import css from './Header.module.css';

function Header() {

  const {currentUser} = useSelector(state => state.userReducer);

  const {currentPost} = useSelector(state => state.postReducer);

  return (
    <div className={css.Header}>
      {
        currentPost&& currentPost.title
      }
      {
        currentUser&& currentUser.name
      }
    </div>
  );
}

export {Header};