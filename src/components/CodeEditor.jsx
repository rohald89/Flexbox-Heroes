import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setAnswer } from '../app/challengeSlice';

const EditorWrapper = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #2e3440;
  border-radius: 6px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);

  & > * {
    font-family: 'Ubuntu,Droid Sans,-apple-system,BlinkMacSystemFont,Segoe WPC,Segoe UI,sans-serif';
    line-height: 1;
    font-size: 1rem;
    color: rgb(216, 222, 233);
  }
`;

const LineNumbers = styled.div`
  line-height: 1;
  font-size: 1rem;
  width: 2rem;
  background-color: #2e3440;
  color: #fff;
`;

const Editor = styled.div`
  background-color: #2e3440;
`;
const TextEditor = styled.textarea`
  color: inherit;
  background-color: #2e3440;
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  padding: 0;
  padding-left: 2.4rem;
  border: none;
  height: 4rem;
  resize: none;
  outline: none;
  box-sizing: border-box;
  width: 100%;
`;

const CodeEditor = ({ boilerplate }) => {
  const { answer } = useSelector((state) => state.challenge);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setAnswer(e.target.value));
  };
  console.log(boilerplate);

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
      <Editor style={{ width: '100%' }}>
        {/* Would it be better to render the boilerplate provided by the backend? Not sure wether this will always be the same across challenges? */}
        {/* <pre style={{margin: 0}}>{boilerplate}</pre> */}
        <pre style={{ margin: 0 }}>&#35;<span style={{ color: 'rgb(143,188,187)'}}>container</span> &#123;</pre>
        <pre style={{ margin: 0, paddingLeft: "2.4rem" }}>display: <span style={{ color: 'rgb(129,161, 193)'}}>flex;</span></pre>
        <TextEditor type="text" onChange={handleChange} />
        <pre style={{ margin: 0 }}>}</pre>
      </Editor>
    </EditorWrapper>
  );
};
export default CodeEditor;
