import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {User} from "../User/User";
import {userActions} from "../../redux";

function Users() {

  const dispatch = useDispatch();

  const {users} = useSelector(state => state.useReducer);

  useEffect(() => {
    // userService.getAll().then(({data})=>dispatch(userActions.getAllWithDispatch(data)))
    dispatch(userActions.getAll());
  }, []);

  return (
      <div>
        {
          users.map(user => <User key={user.id} user={user}/>)
        }
      </div>
  );
}
export {Users};
