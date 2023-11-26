import { configureStore } from "@reduxjs/toolkit";
import videoReducer from './videoSlice/videoSlice'

const store = configureStore({
    reducer: {
    videoList: videoReducer
    }
})

export default store;