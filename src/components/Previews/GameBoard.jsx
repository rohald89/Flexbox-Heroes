import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCorrectAnswer } from '../../app/challengeSlice';
import { useDebounce } from '../../hooks/useDebounce';
import FlexItem from '../FlexItem';
import AnswerPreview from './AnswerPreview';
import PreviewWrapper from './PreviewWrapper';
import SolutionPreview from './SolutionPreview';

const GameBoard = ({ solution, elements }) => {
  const answerRef = useRef();
  const solutionRef = useRef();
  const { answer } = useSelector((state) => state.challenge);
  const debouncedAnswer = useDebounce(answer, 200);
  const dispatch = useDispatch();

  useEffect(() => {
    const answerItems = answerRef.current.children;
    const solutionItems = solutionRef.current.children;
    answerRef.current.style = answer;
    const correct = checkAnswer(answerItems, solutionItems);
    dispatch(setCorrectAnswer(correct))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedAnswer]);

  const checkAnswer = (answers, solutions) => {
    let matches = 0
    for(let i = 0; i < answers.length; i++) {
      console.log(answers[i].offsetWidth, solutions[i].offsetHeight)
      if(
        answers[i].offsetLeft === solutions[i].offsetLeft
          && answers[i].offsetTop === solutions[i].offsetTop
          && answers[i].offsetWidth === solutions[i].offsetWidth
          && answers[i].offsetHeight === solutions[i].offsetHeight
      ) {
        matches++
      } else {
        return false
      }
    }
    return true
  }
  return (
    <PreviewWrapper>
      <AnswerPreview answerRef={answerRef}>
        {/* TODO animations are not yet working in Challenges */}
        <AnimatePresence>
        {elements.map((el, i) => (
          <FlexItem
            key={el.id}
            color={el.color.hex}
            type={'answer'}
          />
        ))}
        </AnimatePresence>
      </AnswerPreview>
      <SolutionPreview solutionRef={solutionRef} solution={solution}>
        {elements.map((el, i) => (
          <FlexItem
            key={el.id}
            color={el.color.hex}
            type={'solution'}
          />
        ))}
      </SolutionPreview>
    </PreviewWrapper>
  );
};


export default GameBoard;
