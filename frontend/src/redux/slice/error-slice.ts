import { createSlice } from "@reduxjs/toolkit"; // Импортируем тип для экшена
const initialState = '';

const errorSlice = createSlice({
    name: 'error',
    initialState,
    selectors: {
        selectError: (state) => state
    },
    reducers: (create) => ({
        setErrorAC: create.reducer<string>((_state, action) => {
            return action.payload;
        }),
        clearErrorAC: create.reducer(() => {
            return initialState;
        })
    })
});

export const { selectError } = errorSlice.selectors;
export const { setErrorAC, clearErrorAC } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;