import styled from 'styled-components';

const FlexItemStyles = styled.div`
  background-color: ${(props) => (props.type === 'answer' ? props.color : '')};
  min-width: 50px;
  min-height: 50px;
  margin: 4px;
  border: 4px solid
    ${(props) => (props.type === 'solution' ? props.color : 'transparent')};
  /* border-radius: ${(props) => (props.type === 'answer' ? '50%' : '0')}; */
  opacity: ${(props) => (props.type === 'solution' ? 0.8 : 1)};
`;

export default FlexItemStyles;
