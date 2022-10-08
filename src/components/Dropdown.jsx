import * as Select from '@radix-ui/react-select';
import {
    CheckIcon,
    ChevronDownIcon,
    ResetIcon,
} from '@radix-ui/react-icons';
import { StyledTrigger, StyledIcon, Content, StyledViewport, StyledItem, StyledItemIndicator } from './../styles/DropDownStyles';
import { Button } from '../styles/ButtonStyles';
import { resetProperty } from '../app/playgroundSlice';
import { useDispatch } from 'react-redux';

const Dropdown = ({ index, label, property, options, value, onChange }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <p>{label}</p>
      <div style={{marginLeft: 'auto', marginRight: '1rem'}}>
        <Select.Root value={value} onValueChange={onChange}>
          <StyledTrigger>
            <Select.Value placeholder="Pick an option"/>
            <StyledIcon>
              <ChevronDownIcon />
            </StyledIcon>
          </StyledTrigger>
          <Content>
            <StyledViewport>
              {options.map((option, i) => (
                <StyledItem key={i} value={option}>
                  <Select.ItemText>{option}</Select.ItemText>
                  <StyledItemIndicator>
                    <CheckIcon />
                  </StyledItemIndicator>
                </StyledItem>
              ))}
            </StyledViewport>
          </Content>
        </Select.Root>
      </div>
      <Button onClick={() => dispatch(resetProperty({ property, index }))}><ResetIcon /></Button>
    </div>
  );
};

export default Dropdown;
