import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";


const initialState = {
    categoryType: 'ALL',
    sortType: 'RATING',
    currentPage: 1,
}

export const filterKinoSlice = createSlice({
    name: 'filterKino',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.categoryType = action.payload
        },
        setSort: (state, action) => {
            state.sortType = action.payload
        },
        setPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

export const selectFilter = (state: RootState) => state.filterKino;

export const {setCategory, setSort, setPage} = filterKinoSlice.actions

export default filterKinoSlice.reducer;
