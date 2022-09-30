import styled from "styled-components";

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

const GameBoard = ({ solution }) => {
  console.log(solution)
  return (
    <BoardWrapper>
        <div id="answer">
            <FlexItem type={"answer"} />
            <FlexItem type={"answer"} />
            <FlexItem type={"answer"} />
        </div>
        <div id="solution" style={solution}>
            <FlexItem type={'solution'} />
            <FlexItem type={'solution'} />
            <FlexItem type={'solution'} />
        </div>
    </BoardWrapper>
  )
}

const FlexItem = ({ type }) => {
    return (
        <FlexItemStyles type={type}></FlexItemStyles>
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
