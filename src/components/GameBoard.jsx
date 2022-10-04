import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const BoardWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #21252c;

    #answer {
        display: flex;
        z-index: 20;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    #solution {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
`;

const GameBoard = ({ solution, elements }) => {
  const answerRef = useRef();
  const { answer } = useSelector((state) => state.challenge);

  useEffect(() => {
    console.log(answerRef.current);
    answerRef.current.style = answer;
  }, [answer]);

  return (
    <BoardWrapper>
      <div id="answer" ref={answerRef}>
        {elements.map((el) => (
          <FlexItem key={el.id} color={el.color.hex} type={'answer'} />
        ))}
      </div>
      <div id="solution" style={solution}>
        {elements.map((el) => (
          <FlexItem key={el.id} color={el.color.hex} type={'solution'} />
        ))}
      </div>
    </BoardWrapper>
  );
};

const FlexItem = ({ type, color, children }) => {
  return (
    <FlexItemStyles type={type} color={color}>
      {children}
    </FlexItemStyles>
  );
};

const FlexItemStyles = styled.div`
  background-color: ${(props) => (props.type === 'answer' ? props.color : '')};
  width: 50px;
  height: 50px;
  margin: 4px;
  border: 4px solid
    ${(props) => (props.type === 'solution' ? props.color : 'transparent')};
  border-radius: ${(props) => (props.type === 'answer' ? '50%' : '0')};
  opacity: ${(props) => (props.type === 'solution' ? 0.8 : 1)};
`;

export default GameBoard;
