function User({user}) {

  const {id, name, username, email} = user;

  return (
    <div>
      <div>
        <div>id : {id}</div>
        <div>name : {name}</div>
        <div>username : {username}</div>
        <div>email : {email}</div>
      </div>
      <div>
        <button>Current User</button>
        <button>Set User</button>
      </div>
        <hr/>
    </div>
  );
}

export {User};