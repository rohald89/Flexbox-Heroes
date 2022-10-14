import { ResetIcon } from '@radix-ui/react-icons';
import { useDispatch } from 'react-redux';
import { resetProperty } from '../../../app/playgroundSlice';
import Button from '../Button';
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from './styled';

const Slider = ({ label, index, ...props }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <p>{label}</p>
      <div style={{marginLeft: 'auto', marginRight: '1rem'}}>
        <SliderRoot {...props}>
            <SliderTrack >
                <SliderRange />
            </SliderTrack>
            <SliderThumb aria-label={`${label} in pixels`} />
        </SliderRoot>
      </div>
      <Button aria-label="Reset Property" onClick={() => dispatch(resetProperty({ property: label, index }))}><ResetIcon /></Button>
    </div>
  )
}
export default Slider;
