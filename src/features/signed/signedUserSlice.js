import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signed:
    localStorage.getItem('isauthenticated') === null
      ? false
      : localStorage.getItem('isauthenticated'),
};

export const signedUserSlice = createSlice({
  name: 'signed',
  initialState,
  reducers: {
    changeSignedToTrue: (state) => {
      state.signed = true;
    },
    changeSignedToFalse: (state) => {
      state.signed = false;
    },
  },
});
export const { changeSignedToTrue, changeSignedToFalse } =
  signedUserSlice.actions;
export default signedUserSlice.reducer;
