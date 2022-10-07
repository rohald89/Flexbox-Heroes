import styled from "styled-components"
import { useSelector } from "react-redux";
import FlexItem from "../FlexItem";

const PlayGroundBoard = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const PlaygroundPreview = () => {
  const { styles, flexItems } = useSelector(state => state.playground);
  return (
    <PlayGroundBoard className="container" style={styles}>
        {
            flexItems.map((item, index) => (
                <FlexItem key={index} color={item.color} style={item.styles}>{item.content}</FlexItem>
            ))
        }
    </PlayGroundBoard>
  )
}
export default PlaygroundPreview
