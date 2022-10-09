import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

function User({user}) {

  const {id, name, username, email} = user;

  const dispatch = useDispatch();

  return (
    <div>

      <div>
        <div>id : {id}</div>
        <div>name : {name}</div>
        <div>username : {username}</div>
        <div>email : {email}</div>
      </div>

      <div>
        <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>Current User</button>
        <button onClick={()=>dispatch(userActions.getById({id}))}>GetUserFromAPI</button>
        <button onClick={()=>dispatch(userActions.deleteById(id))}>DeleteUser</button>
      </div>

        <hr/>

    </div>
  );
}

export {User};