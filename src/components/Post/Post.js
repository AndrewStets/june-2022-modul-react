function Post({post}) {

  const {userId, id, title, body} = post;

  return (
    <div>
      <div>
        <div>userId : {userId}</div>
        <div>id : {id}</div>
        <div>title : {title}</div>
        <div>body : {body}</div>
      </div>
      <div>
        <button>Set Post</button>
        <button>Current Post</button>
      </div>
        <hr/>
    </div>
  );
}

export {Post};