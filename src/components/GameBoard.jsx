import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

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
    answerRef.current.style = answer
  }, [answer]);

  return (
    <BoardWrapper>
        <div id="answer" ref={answerRef}>
            {
                [...Array(elements)].map((element, index) => (
                    <FlexItem key={index} type={"answer"}/>
                ))
            }
        </div>
        <div id="solution" style={solution}>
            {
                [...Array(elements)].map((element, index) => (
                    <FlexItem key={index} type={"solution"}/>
                ))
            }
        </div>
    </BoardWrapper>
  )
}

const FlexItem = ({ type, children }) => {
    return (
        <FlexItemStyles type={type}>{children}</FlexItemStyles>
    )
}

const FlexItemStyles = styled.div`
    background: ${(props) => props.type === "answer" ? "green" : "red"};
    width: 50px;
    height: 50px;
    margin: 4px;
    border-radius: ${(props) => props.type === "answer" ? "50%" : "0"};
`;

export default GameBoard
