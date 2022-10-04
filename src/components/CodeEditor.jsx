import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setAnswer } from '../app/challengeSlice';

const EditorWrapper = styled.div`
  display: flex;
`;

const LineNumbers = styled.div`
  width: 2rem;
  background-color: #21252c;
  color: #fff;
  border-right: 1px solid #fff;
`;

const CodeEditor = ({ boilerplate }) => {
  const { answer } = useSelector((state) => state.challenge);
  const dispatch = useDispatch();

  const handleChange = (e) => {
      dispatch(setAnswer(e.target.value))
  };

  return (
    <EditorWrapper>
      <LineNumbers>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </LineNumbers>
      <div>
        <pre style={{ margin: 0 }}>{boilerplate}</pre>
        <textarea type="text" defaultValue={answer} onChange={handleChange} />
        <pre>}</pre>
      </div>
    </EditorWrapper>
  );
};
export default CodeEditor;
