import styled from 'styled-components';
import * as Slider from '@radix-ui/react-slider';

const StyledSlider = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  width: 10rem;
  touch-action: none;
  user-select: none;
  &[data-orientation='horizontal'] {
    height: 15px;
  }
  &[data-orientation='vertical'] {
    width: 20px;
    height: 100px;
    flex-direction: column;
  }
`;

const StyledTrack = styled(Slider.Track)`
  background-color: ${({ theme }) => theme.text};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 3px;
`;

const StyledRange = styled(Slider.Range)`
  background-color: ${({ theme }) => theme.focus};
  position: absolute;
  border-radius: 9999px;
  height: 100%;
`;

const StyledThumb = styled(Slider.Thumb)`
  all: unset;
  display: block;
  width: 24px;
  height: 16px;
  background-color: ${({ theme }) => theme.accent};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  cursor: grab;
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.focus};
  }
`;

export {
  StyledSlider as SliderRoot,
  StyledTrack as SliderTrack,
  StyledRange as SliderRange,
  StyledThumb as SliderThumb,
};
