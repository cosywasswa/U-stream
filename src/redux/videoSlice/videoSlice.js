import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const videoUrl = 'https://localhost/3000'
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
initialState = {
    videos: [],
    comments: [],
    isLoading: false,
    isError: false
}

const videoSlice = createSlice({
    initialState,
    name: videoList,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchVideos.pending, (state) =>{
            state.isLoading = true
        }),
        builder.addCase(fetchVideos.fulfilled, (state, action) =>{
            state.isLoading = false
            state.videos = action.payload;
        }),
        builder.addCase(fetchComments.pending, (state) =>{
            state.isLoading = true
        }),
        builder.addCase(fetchComments.fulfilled, (state, action) =>{
            state.isLoading = false
            state.comments = action.payload ;
        })
    }
})

export default videoSlice.reducer