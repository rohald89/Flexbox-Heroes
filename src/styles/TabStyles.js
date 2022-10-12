import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

const StyledRoot = styled(Tabs.Root)`
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  color: white;
  overflow: hidden;
  transition: box-shadow 400ms ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

const StyledTabList = styled(Tabs.List)`
  background-color: ${({theme}) => theme.accent};
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledTrigger = styled(Tabs.Trigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  height: 35px;
  gap: 5px;
  background-color: transparent;
  color: ${({theme}) => theme.text};
  user-select: none;
  border-top: 5px solid transparent;

  &:hover {
    background-color: ${({theme}) => theme.accentHover};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.focus};
  }
  &[data-state='active'] {
    background-color: ${({theme}) => theme.background};
    border-radius: 5px 5px 0 0;
    border-top: 5px solid ${({theme}) => theme.focus};
  }
`;

const StyledTabContent = styled(Tabs.Content)`
  padding: 15px;
  background-color: ${({theme}) => theme.background};
  border-radius: 0 0 5px 5px;
  color: ${({theme}) => theme.text};
`;

export {
  StyledRoot as TabsRoot,
  StyledTabList as TabsList,
  StyledTrigger as TabsTrigger,
  StyledTabContent as TabsContent,
};
