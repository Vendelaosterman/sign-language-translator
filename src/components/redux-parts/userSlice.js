import { createSlice } from "@reduxjs/toolkit";

// Thunks

//export const 

// Slice
export const userSlice = createSlice({
    name: 'user',
    initialState: {
    },
    reducers: {
        userCheck: (state, action) => {

        },
        userCreate: (state, action) =>  {

        },
        userLogin: (state, action) => {

        },
        userById: (state, action) => {

        }
    }
})

export const { userCheck, userCreate, userLogin, userById } = userSlice.actions
export default userSlice.reducer