import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

const StyledRoot = styled(Tabs.Root)`
    background-color: #2F343F;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
    border-radius: 5px;
    color: white;
    overflow: hidden;
`;

const StyledTabList = styled(Tabs.List)`
    background-color: #3C4251;
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
    color: #D9DEE8;
    user-select: none;
    border-top: 5px solid transparent;

    &:hover {
        background-color: #5B687C;
    }
    &:focus {
        box-shadow: 0 0 0 2px #D9DEE8;
    }
    &[data-state="active"] {
        background-color: #2F343F;
        border-radius: 5px 5px 0 0;
        border-top: 5px solid #6580A9;
    }
`;

const StyledTabContent = styled(Tabs.Content)`
    padding: 15px;
    background-color: #2F343F;
    border-radius: 0 0 5px 5px;
    color: #D9DEE8;
`;

export {
    StyledRoot as TabsRoot,
    StyledTabList as TabsList,
    StyledTrigger as TabsTrigger,
    StyledTabContent as TabsContent,
};
