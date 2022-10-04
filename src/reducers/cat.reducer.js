import {useReducer} from "react";

import {AddCat, DeleteCat} from "./cat.actions";

const reducer = (state, action) => {

    const {type, payload} = action;

    switch (type) {
        case AddCat:
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};
        case DeleteCat:
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)};
    }
};

const useCatReducer = () => useReducer(reducer, {cats: []});

export {
    useCatReducer
};