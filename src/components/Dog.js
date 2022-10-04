import {DeleteDog} from "../reducers";

function Dog({dog,dispatch}) {

    return (
        <div>
            <h2>{dog.name}</h2>
            <button onClick={() => dispatch({type: DeleteDog, payload: dog.id})}>Delete</button>
        </div>
    );
}

export {Dog};