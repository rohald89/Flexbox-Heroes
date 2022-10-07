import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'container',
  answer: '',
  styles: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  flexItems: [
    {
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
    setActiveTab: (state, action) => {
        state.activeTab = action.payload;
    },
    changeProperty: (state, action) => {
        const { property, value } = action.payload;
        state.styles[property] = value;
    },
    changeFlexItemProperty: (state, action) => {
        const { property, value, index } = action.payload;
        state.flexItems[index].styles[property] = value;
    }
  },
});

export const { setActiveTab, changeProperty, changeFlexItemProperty } = playgroundSlice.actions;

export default playgroundSlice.reducer;
