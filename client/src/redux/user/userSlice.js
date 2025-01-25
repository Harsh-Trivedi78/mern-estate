import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "../../../../api/controllers/user.controller";

const initialState = {
    currentUser: null,
    error : null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart:(state) =>{
            state.loading =true;
        },
        signINSuccess:(state,action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
            
        },
        signInFailure:(state,action) =>{
            state.error = action.payload;
            state.loading = false;
        
        },
        updateUserStart:(state) =>{
            state.loading = true;
        },
        updateUserSuccess:(state,action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure:(state,action) =>{
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart:(state) =>{
            state.loading = true;
        },
        deleteUserSuccess:(state) =>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure:(state,action) =>{
            state.error = action.payload;
            state.loading = false


    }
},
});

export const {signInStart, 
    signINSuccess, 
    signInFailure , 
    updateUserFailure , 
    updateUserSuccess ,
    updateUserStart , 
    deleteUserStart ,
    deleteUserFailure ,
    deleteUserSuccess} = userSlice.actions;

export default userSlice.reducer;