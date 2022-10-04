import styled from 'styled-components';

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

export default BoardWrapper;
