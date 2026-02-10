import { configureStore } from '@reduxjs/toolkit';
import {bookReducer} from "./books/books-slice.ts";

export const store = configureStore({
    reducer: {
        books:bookReducer
    },
});

// Экспортируем типы для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;