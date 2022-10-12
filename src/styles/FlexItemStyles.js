import styled from 'styled-components';

const FlexItemStyles = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.type === 'solution' ? 'transparent' : props.type === 'answer' ? props.color : props.theme.accent};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  margin: 4px;
  border: 4px solid
    ${(props) => (props.type === 'solution' ? props.color : 'transparent')};
  border-radius: 3px;
  box-shadow: ${(props) => (props.active ? `0 0 0 2px ${props.theme.focus}` : 'none')};
  opacity: ${(props) => (props.type === 'solution' ? 0.8 : 1)};
  color: ${({ theme }) => theme.text};

  & .delete {
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    border: none;
    background-color: ${({ theme }) => theme.background};
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    aspect-ratio: 1/1;
    color: ${({ theme }) => theme.text};
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    outline: none;
    box-shadow: ${({ theme }) => theme.shadow};
    &:hover {
      color: ${({ theme }) => theme.nord11};
    }
  }
  &:hover .delete {
    display: inline-flex;
  }
  &:focus .delete {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.focus};
  }
`;

export default FlexItemStyles;
