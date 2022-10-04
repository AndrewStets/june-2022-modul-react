import {useRef} from "react";

import {AddDog, useDogReducer} from "../reducers";
import {Dog} from "./Dog";

function Dogs() {

    const [state, dispatch] = useDogReducer();

    const dogInput = useRef();

    const createDog = () => {
        dispatch({type: AddDog, payload: dogInput.current.value});
        dogInput.current.value = '';
    };

    return (
        <div>
            <div>
                <div>
                    <input type='text' placeholder={'Dog name'} ref={dogInput}/>
                    <button onClick={createDog}>Add</button>
                </div>
                {
                    state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch()}/>)
                }
            </div>
        </div>
    );
}

export {Dogs};