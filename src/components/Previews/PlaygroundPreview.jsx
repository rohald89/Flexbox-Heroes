import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFlexItem, setActiveTab } from '../../app/playgroundSlice';
import FlexItem from '../FlexItem';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { AnimatePresence } from 'framer-motion';

const PlayGroundBoard = styled.div`
  display: flex;
  position: absolute;
  transition: all 0.5s ease;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PlaygroundPreview = () => {
  const { activeTab, styles, flexItems } = useSelector(
    (state) => state.playground
  );
  const dispatch = useDispatch();

  return (
    <PlayGroundBoard className="container" style={styles}>
      <AnimatePresence>
        {flexItems.map((item, index) => (
          <FlexItem
            key={index}
            active={(index === activeTab).toString()}
            color={item.color}
            style={{ border: 'none', cursor: 'pointer', ...item.styles }}
            onClick={() => dispatch(setActiveTab(index))}
          >
            <button
              className="delete"
              onClick={() => dispatch(removeFlexItem({ index }))}
            >
              <CrossCircledIcon />
            </button>
            {item.content}
          </FlexItem>
        ))}
      </AnimatePresence>
    </PlayGroundBoard>
  );
};
export default PlaygroundPreview;
