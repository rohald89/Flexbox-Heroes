import * as Select from '@radix-ui/react-select';
import {
    CheckIcon,
    ChevronDownIcon,
} from '@radix-ui/react-icons';
import { StyledTrigger, StyledIcon, Content, StyledViewport, StyledItem, StyledItemIndicator } from './../styles/DropdownStyles';

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <p>{label}</p>
      <div>
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
    </div>
  );
};

export default Dropdown;
