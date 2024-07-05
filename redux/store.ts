import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./slices/auth"
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
    auth: AuthReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export const persistore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch