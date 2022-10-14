import * as Select from '@radix-ui/react-select';
import {
    CheckIcon,
    ChevronDownIcon,
    ResetIcon,
} from '@radix-ui/react-icons';
import { StyledTrigger, StyledIcon, Content, StyledViewport, StyledItem, StyledItemIndicator } from './styled';
import Button from '../Button';
import { resetProperty } from '../../../app/playgroundSlice';
import { useDispatch } from 'react-redux';
import { memo } from 'react';

const Dropdown = ({ index, label, property, options, value, onChange }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <p>{label}</p>
      <div style={{marginLeft: 'auto', marginRight: '1rem'}}>
        <Select.Root value={value} onValueChange={onChange}>
          <StyledTrigger aria-label={label}>
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
      <Button aria-label="Reset Property" onClick={() => dispatch(resetProperty({ property, index }))}><ResetIcon /></Button>
    </div>
  );
};

export default memo(Dropdown, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
});
