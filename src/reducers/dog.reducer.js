import {useReducer} from "react";

import {AddDog, DeleteDog} from "./dog.actions";

const reducer = (state, action) => {

    const {type, payload} = action;

    switch (type) {
        case AddDog:
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};
        case DeleteDog:
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};
    }
};

const useDogReducer = () => useReducer(reducer, {dogs: []});

export {
    useDogReducer
}