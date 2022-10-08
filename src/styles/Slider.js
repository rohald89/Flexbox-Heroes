import styled from 'styled-components';
import * as Slider from '@radix-ui/react-slider';

const StyledSlider = styled(Slider.Root)`
    position: relative;
    display: flex;
    align-items: center;
    width: 10rem;
    touch-action: none;
    user-select: none;
    &[data-orientation="horizontal"] {
        height: 20px;
    }
    &[data-orientation="vertical"] {
        width: 20px;
        height: 100px;
        flex-direction: column;
    }
`;

const StyledTrack = styled(Slider.Track)`
    background-color: #5B687C;
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    height: 4px;
`;

const StyledRange = styled(Slider.Range)`
    background-color: #98BABB;
    position: absolute;
    border-radius: 9999px;
    height: 100%;
`;

const StyledThumb = styled(Slider.Thumb)`
    all: unset;
    display: block;
    width: 20px;
    height: 20px;
    background-color: #98BABB;
    box-shadow: 0 2px 10px #5B687C;
    border-radius: 10px;
    cursor: grab;
    &:focus {
        box-shadow: 0 0 0 2px #ffffff44;
    }
`;

export {
    StyledSlider as SliderRoot,
    StyledTrack as SliderTrack,
    StyledRange as SliderRange,
    StyledThumb as SliderThumb,
};
