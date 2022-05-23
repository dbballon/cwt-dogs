import { configureStore } from '@reduxjs/toolkit'
import dogReducer from './reducer'

export default configureStore({
    reducer: dogReducer
})