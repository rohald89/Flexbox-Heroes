import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setOverFlow } from '../../app/playgroundSlice';
import { StyledPreviewWrapper } from './styled';

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
