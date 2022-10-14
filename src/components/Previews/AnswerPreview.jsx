import styled from 'styled-components';

const StyledAnswerPreview = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
`;

const AnswerPreview = ({ children, answerRef }) => {
  return <StyledAnswerPreview ref={answerRef}>{children}</StyledAnswerPreview>;
};
export default AnswerPreview;
