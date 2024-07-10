import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPages = createAsyncThunk('Pages/fetchPages', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/pages')
    // const response = await axios.get('https://pixelfull.pixelevent.site/api/pages')
    return response.data['hydra:member']
})

const initialPagesState = {
    pages : [],
    status : "idle",
    error : null
}

const pagesSlice = createSlice({
    name : 'pages',
    initialState : initialPagesState,
    reducers : {},
    extraReducers : builder => {
        builder
        .addCase(fetchPages.pending, state => {
            state.status = 'loading'
        })
        .addCase(fetchPages.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.pages = action.payload
        })
        .addCase(fetchPages.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })

    }
})

export default pagesSlice.reducer;