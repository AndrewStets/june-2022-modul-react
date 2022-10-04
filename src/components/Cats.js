import {useRef} from "react";

import {AddCat, useCatReducer} from "../reducers";
import {Cat} from "./Cat";

function Cats() {

    const [state, dispatch] = useCatReducer();

    const catInput = useRef();

    const createCat = () => {
        dispatch({type: AddCat, payload: catInput.current.value});
        catInput.current.value = '';
    };

    return (
        <div>
            <div>
                <div>
                    <input type='text' placeholder={'Cat name'} ref={catInput}/>
                    <button onClick={createCat}>Add</button>
                </div>
                {
                    state.cats.map(cat=> <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)
                }
            </div>
        </div>
    );
};

export {Cats};