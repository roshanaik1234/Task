import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        LOGIN: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
    },
});
export const { LOGIN, LOGOUT } = authSlice.actions;
export default authSlice.reducer;

