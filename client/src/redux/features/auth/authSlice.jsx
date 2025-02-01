import { createSlice } from '@reduxjs/toolkit';
import { Userlogin, Userregister } from './authAction';

const token = localStorage.getItem('token') || null;

const initialState = {
    loading: false,
    user: null,
    token,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // User Login
        builder.addCase(Userlogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(Userlogin.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            localStorage.setItem('token', payload.token); // Persist token
        });

        builder.addCase(Userlogin.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload; // Store error message
        });

        // User Register
        builder.addCase(Userregister.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(Userregister.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user; // Persist token
        });

        builder.addCase(Userregister.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload; // Store error message
        });
    },
});

export default authSlice.reducer;