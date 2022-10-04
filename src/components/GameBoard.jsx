import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDebounce } from '../hooks/useDebounce';
import BoardWrapper from '../styles/BoardWrapper';
import FlexItemStyles from '../styles/FlexItemStyles';

const GameBoard = ({ solution, elements }) => {
  const answerRef = useRef();
  const solutionRef = useRef();
  const { answer } = useSelector((state) => state.challenge);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const debouncedAnswer = useDebounce(answer, 200);

  useEffect(() => {
    console.log('checking');
    const answerItems = answerRef.current.children;
    const solutionItems = solutionRef.current.children;
    answerRef.current.style = answer;
    setCorrectAnswer(checkAnswer(answerItems, solutionItems));
  }, [debouncedAnswer]);

  const checkAnswer = (answers, solutions) => {
    let matches = 0
    for(let i = 0; i < answers.length; i++) {
      console.log(answers[i].offsetLeft, solutions[i].offsetLeft)
      if(answers[i].offsetLeft === solutions[i].offsetLeft && answers[i].offsetTop === solutions[i].offsetTop) {
        matches++
      } else {
        return false
      }
    }
    return true
  }
  return (
    <BoardWrapper>
      <div id="answer" ref={answerRef}>
        {elements.map((el, i) => (
          <FlexItem 
            key={el.id} 
            color={el.color.hex} 
            type={'answer'} 
          />
        ))}
      </div>
      <div id="solution" ref={solutionRef} style={solution}>
        {elements.map((el, i) => (
          <FlexItem 
            key={el.id} 
            color={el.color.hex} 
            type={'solution'} 
          />
        ))}
      </div>
        { correctAnswer && <h1>You got it!</h1> }
    </BoardWrapper>
  );
};

const FlexItem = ({ children, ...props }) => {
  return (
    <FlexItemStyles {...props} >  
      {children}
    </FlexItemStyles>
  );
};


export default GameBoard;
