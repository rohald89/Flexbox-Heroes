
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLevel: 1,
  activeTheme: 'light',
  activeChallenge: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.activeTheme = action.payload;
    }
  },
});

export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
