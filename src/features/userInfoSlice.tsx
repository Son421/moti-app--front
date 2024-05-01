import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface infoType {
    name: string;
    pointCounter: number;
    pic: FileList | undefined;
    passworld: string;
}

interface userType {
    value: infoType
}

const initialState: userType = {
    value: {
        name: 'aaaA',
        pointCounter: 0,
        pic: undefined,
        passworld: '',
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
        pointIncrease(state, action: PayloadAction<number>){
            state.value.pointCounter = state.value.pointCounter + action.payload;
        },
        pointDecrease(state){
            state.value.pointCounter--
            // 
        },
    }
});

export const {updateInfo, pointIncrease } = userInfoSlice.actions;

export const userInfo = (state: RootState) => state.userInfo.value;

export default userInfoSlice.reducer;