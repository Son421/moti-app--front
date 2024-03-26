import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface infoType {
    name: string;
    pointCounter: number;
    pic: 'm' | 'f' | 's';
}

interface userType {
    value: infoType
}

const initialState: userType = {
    value: {
        name: 'aaaA',
        pointCounter: 0,
        pic: "m",
    }
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers:{
        updateInfo(state, action: PayloadAction<infoType>){ 
            state.value = action.payload;
            // 
        },
        pointIncrease(state){
            state.value.pointCounter++
            //  
        },
        pointDecrease(state){
            state.value.pointCounter--
            // 
        },
    }
});

export const {updateInfo } = userInfoSlice.actions;

export const userInfo = (state: RootState) => state.userInfo.value;

export default userInfoSlice.reducer;