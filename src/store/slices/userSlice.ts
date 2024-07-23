import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  token: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state: any) => state;

export default userSlice.reducer;
