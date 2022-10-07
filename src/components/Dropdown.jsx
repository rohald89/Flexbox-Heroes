import * as Select from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
} from '@radix-ui/react-icons';
import styled from 'styled-components';

const StyledTrigger = styled(Select.Trigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 4px;
  padding: 0 15px;
  height: 35px;
  min-width: 8rem;
  gap: 5px;
  background-color: white;
  color: darkgreen;
  user-select: none;
  &:hover {
    background-color: pink;
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;

const StyledIcon = styled(Select.SelectIcon)`
  color: tomato;
`;

const StyledContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

const StyledViewport = styled(Select.Viewport)`
  padding: 5px;
`;

function Content({ children, ...props }) {
  return (
    <Select.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </Select.Portal>
  );
}

const StyledItem = styled(Select.Item)`
  all: unset;
  color: tomato;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 1.5rem;
  padding: 0 35px 0 25px;
  position: relative;

  &:focus {
    background-color: purple;
    color: white;
  }
`;

const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
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
