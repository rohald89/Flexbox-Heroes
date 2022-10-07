import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../app/playgroundSlice";
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
  const { activeTab, styles, flexItems } = useSelector(state => state.playground);
  const dispatch = useDispatch();

  return (
    <PlayGroundBoard className="container" style={styles}>
        {
            flexItems.map((item, index) => (
                <FlexItem
                  key={index}
                  active={index === activeTab}
                  color={item.color}
                  style={item.styles}
                  onClick={() => dispatch(setActiveTab(index))}
                >
                    {item.content}
                </FlexItem>
            ))
        }
    </PlayGroundBoard>
  )
}
export default PlaygroundPreview
