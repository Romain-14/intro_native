import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    infos: [],
    isLogged: true,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state,action){
            state.infos = [];
            state.isLogged = false;
        }
    }
})

export const {logout} = userSlice.actions;

export default userSlice.reducer;