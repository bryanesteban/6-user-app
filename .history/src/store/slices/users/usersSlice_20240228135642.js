import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users:[],

    },
    reducers: {
        addUser: (state, action) => {
            state.users = [
                ...state.users,
                {
                    ...action.payload
                }
            ]
        },
        removeUser: (state,action) =>{
            state.users = state.users.filter(user => user.id !== action.payload);
        },

        updateUser: (state, action) =>{
            state.users = state.users.map(u => {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload
                    }
                }
                return u; 
            })
        }
    }

});

