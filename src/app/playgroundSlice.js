import { createSlice } from '@reduxjs/toolkit';

const initialFlexItem = {
    styles: {
        order: 0,
        flexGrow: "0",
        flexShrink: "1",
        flexBasis: '',
        alignSelf: 'auto',
        justifySelf: 'auto',
        width: '',
        height: '',
    }
};

const initialState = {
  overFlow: false,
  activeTab: 'container',
  answer: '',
  styles: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    gap: '0px',
  },
  flexItems: [
    {
        color: '#5D687A',
        content: 'Item 1',
        ...initialFlexItem
    },
    {
        color: '#5D687A',
        content: 'Item 2',
        ...initialFlexItem
    },
  ],
  generatedCSS: '',
  generatedHTML: '',
};

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    setOverFlow: (state, action) => {
        state.overFlow = action.payload;
    },
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
    changeFlexItemColor: (state, action) => {
        console.log(state);
        const { color, index } = action.payload;
        state.flexItems[index].color = color;

    },
    addFlexItem: (state, action) => {
        state.flexItems.push({
            color: '#5D687A',
            content: `Item ${state.flexItems.length + 1}`,
            ...initialFlexItem
        });
    },
    removeFlexItem: (state, action) => {
        const {index} = action.payload;
        state.flexItems.splice(index, 1);
        if(state.activeTab === index ) {
            // TODO - seems like this is not working
            state.activeTab = 'container';
        }
    },
    resetProperty: (state, action) => {
        const { property, index } = action.payload;
        if(index >= 0) {
            state.flexItems[index].styles[property] = initialFlexItem.styles[property];
        } else {
            state.styles[property] = initialState.styles[property];
        }
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
    ${state.flexItems.map((item, index) => `<div class="item-${index + 1}">${item.content}</div>`).join('\n    ')}
</div>`;
    },
  },
});

export const { setOverFlow, setActiveTab, changeProperty, changeFlexItemProperty, changeFlexItemColor, addFlexItem, removeFlexItem, resetProperty, resetPlayground, generateCode } = playgroundSlice.actions;

export default playgroundSlice.reducer;
