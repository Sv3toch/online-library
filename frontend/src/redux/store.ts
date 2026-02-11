import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { bookReducer } from "./slice/books-slice.ts";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import {filterReducer} from "./slice/filter-slice.ts"; // использует localStorage под капотом

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    books: bookReducer,
    // filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Обязательно для redux-persist
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);