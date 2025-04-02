import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    name: string;
    login: string;
    isSignedIn: boolean;
}

const initialState: UserState = {
    name: "",
    login: "",
    isSignedIn: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.login = action.payload.login;
            state.isSignedIn = true;
        }
    }
});

export const { signIn } = userSlice.actions;

export default userSlice.reducer;