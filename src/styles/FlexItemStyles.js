import styled from 'styled-components';

const FlexItemStyles = styled.div`
  background-color: ${(props) => (props.type === 'solution' ? 'transparent' : props.color)};
  display: inline-flex;
    align-items: center;
    justify-content: center;
  min-width: 50px;
  min-height: 50px;
  margin: 4px;
  border: 4px solid
    ${(props) => (props.type === 'solution' ? props.color : 'transparent')};
    border-radius: 3px;
  box-shadow: ${(props) => (props.active ? '0 0 0 2px #94BECE' : 'none')};
  opacity: ${(props) => (props.type === 'solution' ? 0.8 : 1)};
`;

export default FlexItemStyles;
