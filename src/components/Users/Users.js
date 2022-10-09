import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

function Users() {

  const dispatch = useDispatch();

  const {users, error, loading,userFromAPI} = useSelector(state => state.userReducer);

  useEffect(() => {
    // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
    dispatch(userActions.getAll())
  }, []);

  return (
      <div>
        {
          error && <h2>Error</h2>
        }
        {
          loading && <h2>Loading...............</h2>
        }
        {
            userFromAPI && userFromAPI.email
        }
        <hr/>
        {
          users.map(user =>
              <User key={user.id} user={user}/>)
        }
      </div>
  );
}

export {Users};