import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { setOverFlow } from "../../app/playgroundSlice";

const StyledPreviewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
  background-color: #2e3440;
  color: #D9DEE8;
`;

const PreviewWrapper = ({ children }) => {
  const wrapperRef = useRef();
  const dispatch = useDispatch();

  const isOverFlowing = () => {
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = wrapperRef.current;
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
  }
  useEffect(() => {
    if (isOverFlowing()) {
        dispatch(setOverFlow(true));
    } else {
        dispatch(setOverFlow(false));
    }
  }, [children]);
  return (
    <StyledPreviewWrapper ref={wrapperRef}>{children}</StyledPreviewWrapper>
  )
}
export default PreviewWrapper
