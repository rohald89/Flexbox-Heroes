import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import PageWrapper from '../../styles/PageWrapper';
import { changeProperty } from '../../app/playgroundSlice';
import PlaygroundPreview from '../../components/Previews/PlaygroundPreview';
import PreviewWrapper from '../../components/Previews/PreviewWrapper';

const ContainerSettings = styled.div`
    margin: 0 auto;
    padding: 1.5rem;
    background: #888;
`;

export default function PlaygroundPage() {
  const { styles } = useSelector(state => state.playground);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Playground</h1>
      <PageWrapper>
        <div className="left">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
          <ContainerSettings>
            <Dropdown
                label="justify-content"
                options={['flex-end', 'flex-start', 'center', 'space-between', 'space-around']}
                value={styles.justifyContent}
                onChange={(value) => dispatch(changeProperty({ property: 'justifyContent', value }))}
            />
            <Dropdown
                label="align-items"
                options={['flex-end', 'flex-start', 'center', 'stretch', 'baseline']}
                value={styles.alignItems}
                onChange={(value) => dispatch(changeProperty({ property: 'alignItems', value }))}
            />
            <Dropdown
                label="flex-direction"
                options={['row', 'row-reverse', 'column', 'column-reverse']}
                value={styles.flexDirection}
                onChange={(value) => dispatch(changeProperty({ property: 'flexDirection', value }))}
            />
          </ContainerSettings>
        </div>
        <div className="right">
            <PreviewWrapper>
                <PlaygroundPreview />
            </PreviewWrapper>
        </div>
      </PageWrapper>
    </div>
  );
}
