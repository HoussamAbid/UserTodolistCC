import { configureStore} from '@reduxjs/toolkit'
import userSlice from './UserSlice';
import todoSlice from './TodoSlice';

export const store =configureStore({
    reducer:{
        user:userSlice,
        todoList:todoSlice,
    }
})