import styled from 'styled-components';

export const ButtonStyles = styled.button`
  background-color: ${({ theme }) => theme.background};
  border: none;
  cursor: pointer;
  color: ${({theme}) => theme.text};
  border-radius: 3px;
  box-shadow: 0 0 0 1px ${({theme}) => theme.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.35rem;
  transition: background-color 0.3s ease, box-shadow .3s ease, color .3s ease;
  outline: none;

  &.copy-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  &:hover {
      background-color: ${({theme}) => theme.accentHover};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.focus};
  }
`;
