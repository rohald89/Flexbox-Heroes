import styled, { keyframes } from "styled-components";
import * as Tooltip from '@radix-ui/react-tooltip';
const slideDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

const slideRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;


const TooltipContent = styled(Tooltip.Content)`
    border-radius: 5px;
    padding: 10px 15px;
    background-color: #404757;
    color: #D9DEE8;
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    font-size: 0.8rem;
    user-select: none;
    z-index: 100;
    @media (prefers-reduced-motion: no-preference) {
        animation-duration: .4s;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform, opacity;
        &[data-state="delayed-open"] {
            &[data-side="top"] {
                animation-name: ${slideDown};
            }
            &[data-side="bottom"] {
                animation-name: ${slideUp};
            }
            &[data-side="left"] {
                animation-name: ${slideRight};
            }
            &[data-side="right"] {
                animation-name: ${slideLeft};
            }
        }
`;

export { TooltipContent };
