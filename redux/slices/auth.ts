import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userProps {
    firstname: string;
    lastname: string;
    email: string;
    //All the other details goes here 
}

interface AuthState {
    isAuthenticated: boolean,
    loading: boolean,
    user: userProps | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    loading: false,
    user: { firstname: "Usuoyibo", lastname: "Achilles", email: "achilles@qurulab.com" }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.loading = true
        },
        loginSuccess: (state, { payload }:PayloadAction<any>) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = state.user
        }
    }
})

export const { login, loginSuccess } = authSlice.actions

export default authSlice.reducer