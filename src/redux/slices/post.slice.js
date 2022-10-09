import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";

const initialState = ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    postFromAPI: null
});

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
        const {data} = await postService.getAll()
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await postService.getById(id);
            return data
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.posts = action.payload
        // },
        setCurrentPost: (state, action) => {
            state.currentPost=action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.postFromAPI=action.payload
            }),
    });

const {reducer:postReducer,actions:{setCurrentPost}} = postSlice;

const postActions = {
    getAll,
    setCurrentPost,
    getById
};

export {
    postActions,
    postReducer
};