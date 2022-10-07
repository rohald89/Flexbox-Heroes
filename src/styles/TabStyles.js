import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

const StyledRoot = styled(Tabs.Root)`
    background-color: #2F343F;
    border-radius: 5px;
    color: white;
`;

const StyledTabList = styled(Tabs.List)`
    background-color: #3C4251;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
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
    color: white;
    user-select: none;
    border-top: 5px solid transparent;

    &:hover {
        background-color: #5B687C;
    }
    &:focus {
        /* box-shadow: 0 0 0 2px black; */
    }
    &[data-state="active"] {
        background-color: #2F343F;
        border-radius: 5px 5px 0 0;
        border-top: 5px solid rgb(55,148,255);
    }
`;
export {
    StyledRoot as TabsRoot,
    StyledTabList as TabsList,
    StyledTrigger as TabsTrigger,
};
