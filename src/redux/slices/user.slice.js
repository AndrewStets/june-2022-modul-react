import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    userFromAPI: null
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

        getAll: (state, action) => {
            state.users = action.payload
        }

            // getAllWithDispatch: (state, action) => {
            //     state.users = action.payload;
            // }
        }
    });

const {reducer: userReducer, action:{getAll}} = userSlice;

const userActions = {
    getAllWithDispatch
};

export {
    userReducer,
    userActions
};