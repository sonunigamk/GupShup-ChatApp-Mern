import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending, (state, action) => {
      console.log("pendind");
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      console.log("fullfield");
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      conslog.log("rejected");
    });
  },
});

export const {  } = userSlice.actions;
export default userSlice.reducer;
