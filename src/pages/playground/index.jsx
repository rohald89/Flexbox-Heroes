import React from 'react';
import { useSelector } from 'react-redux';

export default function PlaygroundPage({ challenges }) {
  const { styles } = useSelector(state => state.playground);
  console.log(styles);
  return (
    <div>
      <h1>Playground</h1>
      <div>
        <div className="left">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </div>
        <div className="right">
          <h1>Board</h1>
        </div>
      </div>
    </div>
  );
}
