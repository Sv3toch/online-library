import {createSlice} from "@reduxjs/toolkit";
import {type Book, } from "./books-slice.ts";


const initualState:Pick<Book,'title'>= {
    title:'',

}

const filterSlice = createSlice({
name:'filter',
initialState:initualState ,
selectors:{selectTitleFilter:(state)=>state.title},
    reducers:(creator)=>({
    setTitleFilterAC:creator.reducer<{title:string}>((state, action) => {
        state.title=action.payload.title
    }),
        resetFilters: creator.reducer((_state, _action)=>{
            return initualState
        })
    })
})



export const {selectTitleFilter} = filterSlice.selectors
export const {setTitleFilterAC, resetFilters} = filterSlice.actions
export const filterReducer =filterSlice.reducer
