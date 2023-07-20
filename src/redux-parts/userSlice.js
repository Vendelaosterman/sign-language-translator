// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createHeaders } from "../api";
// const apiUrl = process.env.REACT_APP_API_URL

// // Thunks

// // Gets a user by username
// export const getUserAsync = createAsyncThunk (
//     'user/getUserAsync',
//     async (payload) => {
//         const resp = await fetch(`${apiUrl}?username=${payload.username}`);

//         if (resp.ok) {
//             const user = await resp.json()
//             return { user }
//         }
//     }
// )

// // If user doesn't exist  it creates one
// export const createUserAsync = createAsyncThunk (
//     'user/createUserAsync',
//     // Post a new user to the external API
//     async (username)  => {
//         const resp = await fetch(apiUrl, {
//             method: 'POST',
//             headers: createHeaders(),
//             body: JSON.stringify({
//                 username,
//                 translations: []
//             })
//         });

//         // returns the new user so that it can be logged in
//         if (resp.ok) {
//             const user = await response.json()
//             return { user }
//         }
//     }
// )

// // Login user, may not be needed
// export const loginUserAsync = createAsyncThunk (
//     'user/loginUserAsync',
//     async (username) => {
//         const resp = await fetch(apiUrl, {
//             method: 'GET',
//             headers: createHeaders(),
//             body: JSON.stringify({

//             })
//         })
//     }
// )

// // Slice
// export const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         user: {}
//     },
//     reducers: {
//         createUser: (state, action) => {
//             const user = {
//                 username: action.payload.username,
//                 translations: [],
//             }
//             state.user = user;
//         },

//     },
//     extraReducers: {
//         // Returns the found user
//         [getUserAsync.fulfilled]: (state, action) => {
//             return action.payload.user;
//         },

//     }
// });

// export const {  } = userSlice.actions;
// export default userSlice.reducer;