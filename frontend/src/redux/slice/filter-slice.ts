import {createSlice} from "@reduxjs/toolkit";
import {type Book, booksSlice} from "./books-slice.ts";


const initualState:Pick<Book,'title'>= {
    title:'',

}

const filterSlice = createSlice({
name:'filter',
initialState:initualState ,
selectors:{selectFilter:(state)=>state},
    reducers:(creator)=>({
    titleFilterAC:creator.reducer<{title:string}>((state, action) => {
        state.title=action.payload.title
    })
    })
})



export const {selectFilter} = filterSlice.selectors
export const {titleFilterAC} = filterSlice.actions
export const filterReducer =filterSlice.reducer
