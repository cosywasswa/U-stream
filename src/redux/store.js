import { configureStore } from "@reduxjs/toolkit";
import videoReducer from './videoSlice/videoSlice'

const store = configureStore({
    videoList: videoReducer
})

export default store;