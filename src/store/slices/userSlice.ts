import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocalStorageKeys } from "../../constants/localStorageKeys";

export interface AuthState {
  email: string;
  token: string;
  id: string;
  isAuth: boolean | string;
}

const initialState: AuthState = {
  email: "",
  token: "",
  id: "",
  isAuth: localStorage.getItem(LocalStorageKeys.IS_AUTH) ?? "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isAuth = true;
      localStorage.setItem(LocalStorageKeys.IS_AUTH, "true");
    },
    removeUser: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";
      state.isAuth = false;
      localStorage.removeItem(LocalStorageKeys.IS_AUTH);
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
