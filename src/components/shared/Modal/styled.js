import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

const StyledDialogContent = styled(Dialog.Content)`
    background-color: ${({theme}) => theme.body};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    padding-top: 50px;
    border-radius: 6px;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),
    0 8px 16px -8px rgba(0,0,0,.3),
    0 -6px 16px -6px rgba(0,0,0,.025);
    width: 80%;
    max-width: 500px;
    min-height: 300px;
    max-height: 80vh;
    overflow: auto;
`;

const StyledCloseButton = styled(Dialog.Close)`
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
  position: absolute;
  right: 1rem;
    top: 1rem;
  &:hover {
      background-color: ${({theme}) => theme.accentHover};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.focus};
  }
`;

const StyledTrigger = styled(Dialog.Trigger)`
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
  &:hover {
      background-color: ${({theme}) => theme.accentHover};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.focus};
  }
`;

const StyledOverlay = styled(Dialog.Overlay)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export { StyledDialogContent, StyledTrigger, StyledOverlay, StyledCloseButton };
