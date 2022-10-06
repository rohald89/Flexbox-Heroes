import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answer: '',
  styles: {
    justifyContent: '',
    alignItems: '',
    flexDirection: '',
  }
};

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    /* setActiveChallenge: (state, action) => {
      state.activeChallenge = action.payload;
    },
    setCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    }, */
  },
});

export const {} = playgroundSlice.actions;

export default playgroundSlice.reducer;
