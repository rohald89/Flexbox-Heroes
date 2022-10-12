import * as TogglePrimative from '@radix-ui/react-toggle';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../app/userSlice';

const StyledToggle = styled(TogglePrimative.Root)`
  all: unset;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  height: 35px;
  width: 35px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow};
  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.focus}
  }
`;

const ThemeToggle = () => {
  const { activeTheme } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <StyledToggle aria-label="Toggle Darkmode" onPressedChange={() => dispatch(toggleTheme(activeTheme === 'light' ? 'dark' : 'light'))}>
      {activeTheme == 'dark' ? <SunIcon /> : <MoonIcon />}
    </StyledToggle>
  );
};

export default ThemeToggle;
