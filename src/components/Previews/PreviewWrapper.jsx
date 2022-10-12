import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setOverFlow } from '../../app/playgroundSlice';

const StyledPreviewWrapper = styled.div`
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

const PreviewWrapper = ({ children }) => {
  const wrapperRef = useRef();
  const dispatch = useDispatch();

  const isOverFlowing = () => {
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } =
      wrapperRef.current;
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
  };
  useEffect(() => {
    if (isOverFlowing()) {
      dispatch(setOverFlow(true));
    } else {
      dispatch(setOverFlow(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  return (
    <StyledPreviewWrapper ref={wrapperRef}>{children}</StyledPreviewWrapper>
  );
};
export default PreviewWrapper;
