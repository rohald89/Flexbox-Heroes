import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux"
import styled, { keyframes } from "styled-components";
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { TooltipContent } from "../styles/Tooltip";

const pulse = keyframes`
    0% {
        color: #5D687A;
        border: 1px solid #5D687A;
    }
    50% {
        color: #B3666C;
        border: 1px solid #B3666C;
    }
    100% {
        color: #5D687A;
        border: 1px solid #5D687A;
    }
`;

const OverFlowStyles = styled.button`
color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.background};
    border-radius: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.35rem;
    animation: ${pulse} 1s ease-in-out infinite;
    pointer-events: none;
`;

const OverflowWarning = () => {
  const {overFlow} = useSelector(state => state.playground);

  if(!overFlow) return null;
  return (
    <TooltipPrimitive.Provider delayDuration={200} >
         <TooltipPrimitive.Root>
             <TooltipPrimitive.Trigger asChild>
                 <span tabIndex={0} style={{ marginLeft: 'auto'}}>
                    <OverFlowStyles disabled>
                        <ExclamationTriangleIcon />
                    </OverFlowStyles>
                 </span>
            </TooltipPrimitive.Trigger>
            <TooltipContent >
                <h2>Overflow Detected</h2>
                <p>One or more of your flex items are overflowing the container.
                    Try adjusting the flex properties to fix this issue.
                </p>
                <TooltipPrimitive.Arrow width={11} height={5} />
            </TooltipContent>
        </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>

  )
}
export default OverflowWarning
