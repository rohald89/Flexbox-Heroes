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
        color: '#5D687A',
        content: 'Item 1',
        styles: {
            order: 0,
            flexGrow: "0",
            flexShrink: "1",
            flexBasis: 'auto',
            alignSelf: 'auto',
        },
    },
    {
        color: '#5D687A',
        content: 'Item 2',
        styles: {
            order: 0,
            flexGrow: "0",
            flexShrink: "1",
            flexBasis: 'auto',
            alignSelf: 'auto',
        },
    },
  ],
  generatedCSS: '',
  generatedHTML: '',
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
    },
    addFlexItem: (state, action) => {
        state.flexItems.push({
            color: '#5D687A',
            content: `Item ${state.flexItems.length + 1}`,
            styles: {
                order: 0,
                flexGrow: "0",
                flexShrink: "1",
                flexBasis: 'auto',
                alignSelf: 'auto',
            },
        });
    },
    resetPlayground: (state, action) => {
        state.flexItems = initialState.flexItems;
        state.styles = initialState.styles;
        state.activeTab = 'container';
    },
    generateCode: (state, action) => {
        const { justifyContent, alignItems, flexDirection } = state.styles;
        const flexItems = state.flexItems.map((item, index) => {
            const { order, flexGrow, flexShrink, flexBasis, alignSelf } = item.styles;
            return `.item-${index + 1} {
    flex: ${flexGrow} ${flexShrink} ${flexBasis};
    order: ${order};
    align-self: ${alignSelf};
}`;
        });
        const css = `.container {
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
}`;
        state.generatedCSS = `${css}\n${flexItems.join('\n')}`;
        state.generatedHTML = `<div class="container">
    ${state.flexItems.map((item, index) => `<div class="item-${index + 1}">${item.content}</div>`).join('')}
</div>`;
        console.log(state.generatedCSS);
        console.log(state.generatedHTML);
    },
  },
});

export const { setActiveTab, changeProperty, changeFlexItemProperty, addFlexItem, resetPlayground, generateCode } = playgroundSlice.actions;

export default playgroundSlice.reducer;
