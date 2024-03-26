import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface infoType {
    descripton: string;
}

interface userType {
    value: [infoType]
}

const initialState: userType = {
    value: [{
        descripton: 'aaaA',
    }]
}

export const userGoalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers:{

    }
});

export const { } = userGoalsSlice.actions;

// export const goals = (state: RootState) => state.goals.value;

export default userGoalsSlice.reducer;