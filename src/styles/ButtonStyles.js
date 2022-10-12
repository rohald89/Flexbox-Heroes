import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
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
  transition: all 0.2s ease-in-out;
  outline: none;
  &:hover {
      background-color: ${({theme}) => theme.accentHover};
  }
  &:focus { 
    box-shadow: 0 0 0 2px ${({theme}) => theme.focus};
  }
`;

export { ButtonContainer, Button };
