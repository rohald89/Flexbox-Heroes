import styled from 'styled-components';

export const StyledPreviewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0 0 6px 6px;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: box-shadow 400ms ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;
