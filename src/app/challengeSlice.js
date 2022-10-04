import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLevel: 1,
  activeChallenge: null,
  correctAnswer: false,
  answer: '',
};

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    setActiveChallenge: (state, action) => {
      state.activeChallenge = action.payload;
    },
    setCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
  },
});

export const { setActiveChallenge, setCorrectAnswer, setAnswer } = challengeSlice.actions;

export default challengeSlice.reducer;
