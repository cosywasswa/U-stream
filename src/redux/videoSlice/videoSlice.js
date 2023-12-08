import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const videoUrl = 'http://127.0.0.1:4000/api/v1/videos'
const commentUrl = 'https://localhost/3000'

const fetchVideos = createAsyncThunk('videos/fetchVideos', async(thunkAPI) =>{
    try{
    const response = await axios.get()
    return response.data
    } catch(error){
        return thunkAPI.rejectWithValue('something went wrong', error)
    }
})

const fetchComments = createAsyncThunk('comments/fetchComments', async(thunkAPI) =>{
    try{
const response = await axios.get()
return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue('something went wrong', error)
    }
})

 export const addVideo = createAsyncThunk('videos/addVideo', async(thunkAPI, data) =>{
    console.log('Data being sent:', data);
    try{
const response = await axios.post(videoUrl, data);
return response.data;

    } catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    videos: [],
    comments: [],
    isLoading: false,
    isError: false
}

const videoSlice = createSlice({
    initialState,
    name: 'videoList',
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(fetchVideos.fulfilled, (state, action) =>{
            state.isLoading = false
            state.videos = action.payload;
        });
        builder.addCase(fetchComments.pending, (state) =>{
            state.isLoading = true
        });
        builder.addCase(fetchComments.fulfilled, (state, action) =>{
            state.isLoading = false
            state.comments = action.payload ;
        })
    },
})

export default videoSlice.reducer