import {DeleteCat} from "../reducers";

function Cat({cat,dispatch}) {

  return (
      <div>
        <h2>{cat.name}</h2>
        <button onClick={() => dispatch({type: DeleteCat, payload: cat.id})}>Delete</button>
      </div>
  );
}

export {Cat};