import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'





export const getToDoList = createAsyncThunk('todolist/getToDoList', async () => {
    const res = await axios.get('https://dummyjson.com/todos')
    return res.data
})

export const todoSlice = createSlice({
    name: "todolist",
    initialState: {
        data: [],
        error: null,
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getToDoList.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getToDoList.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(getToDoList.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.error = "Error"
            }
        })
    }
})

export default todoSlice.reducer;