import React from 'react';
import { useSelector } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import PageWrapper from '../../styles/PageWrapper';

export default function PlaygroundPage({ challenges }) {
  const { styles } = useSelector(state => state.playground);
  console.log(styles);
  return (
    <div>
      <h1>Playground</h1>
      <PageWrapper>
        <div className="left" style={{ position: 'relative' }} >
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
          <Dropdown label="justify-content" options={['flex-end', 'flex-start', 'center', 'space-between', 'space-around']}/>
        </div>
        <div className="right">
          <h1>Board</h1>
        </div>
      </PageWrapper>
    </div>
  );
}
