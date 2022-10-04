import styled from 'styled-components';

const BoardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
  border-top: 25px solid rgb(59, 66, 82);
  background-color: #2e3440;

  #answer {
    padding: 1rem;
    display: flex;
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #solution {
    padding: 1rem;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export default BoardWrapper;
