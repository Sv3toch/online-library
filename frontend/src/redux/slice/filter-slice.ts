import {createSlice} from "@reduxjs/toolkit";
import {type Book,} from "./books-slice.ts";


const initualState: Omit<Book, 'id'> = {
    title: '',
    author:'',
    isFavorite:false

}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initualState,
    selectors: {selectTitleFilter: (state) => state.title,
    selectAuthorFilter:(state)=>state.author},
    reducers: (creator) => ({
        setTitleFilterAC: creator.reducer<{ title: string }>((state, action) => {
            state.title = action.payload.title
        }),
        resetFiltersAC: creator.reducer((_state, _action) => {
            return initualState
        }),
        setAuthorFilterAC: creator.reducer<{author:string}>((state, action)=>{
            state.author = action.payload.author
        })
    })
})


export const {selectTitleFilter, selectAuthorFilter} = filterSlice.selectors
export const {setTitleFilterAC, setAuthorFilterAC, resetFiltersAC} = filterSlice.actions
export const filterReducer = filterSlice.reducer
