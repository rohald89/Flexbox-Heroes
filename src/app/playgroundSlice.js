import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answer: '',
  styles: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  flexItems: [
    {
        id: 1,
        color: 'red',
        content: 'Item 1',
        styles: {
            order: 1,
            flexGrow: 0,
            flexShrink: 1,
            flexBasis: 'auto',
            alignSelf: 'auto',
        },
    },
    {
        id: 2,
        color: 'green',
        content: 'Item 2',
        styles: {
            order: 2,
            flexGrow: 0,
            flexShrink: 1,
            flexBasis: 'auto',
            alignSelf: 'auto',
        },
    },
  ]
};

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    changeProperty: (state, action) => {
        const { property, value } = action.payload;
        state.styles[property] = value;
    },
  },
});

export const { changeProperty } = playgroundSlice.actions;

export default playgroundSlice.reducer;
