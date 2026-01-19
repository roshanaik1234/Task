import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)     
            console.log("action.payload",action.payload)  
        },
        removeUser(state, action) {
            return state.filter((user, index) => index !== action.payload)
        },
        deleteAllUsers(state, action) {
            return []
        }
    }
})

console.log("redux user", userSlice.actions)

// Export the actions
export const { addUser, removeUser, deleteAllUsers } = userSlice.actions

// Export the reducer as default
export default userSlice.reducer