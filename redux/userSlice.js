import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    infos: {},
    isLogged: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        login(state,action){
            state.infos = {
                id: 1,
                alias: "Khyn", 
            };
            state.isLogged = true;
        },
        logout(state,action){
            state.infos = {};
            state.isLogged = false;
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;