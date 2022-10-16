import styled from "styled-components"

const FooterStyles = styled.footer`
    position: relative;
    margin-top: auto;
    padding-top: 3rem;
    min-height: 300px;
    background-color: ${({theme}) => theme.wave3};
`;

const FooterWrapper = styled.div`
    max-width: 1200px;
    padding-top: 100px;
    text-align: center;
    margin: 0 auto;

    & h1 {
        margin: 0;
    }
`;


const WaveStyles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;

        rect {
            fill: ${({theme}) => theme.body};
        }

        path:nth-of-type(1) {
            fill: ${({theme}) => theme.wave1};
        }

        path:nth-of-type(2) {
            fill: ${({theme}) => theme.wave2};
        }

        path:nth-of-type(3) {
            fill: ${({theme}) => theme.wave3};
        }

        path:nth-of-type(4) {
            fill: ${({theme}) => theme.accentHover};
        }
    }
    .shape-fill {
        fill: ${({ theme }) => theme.background};
    }
`;

const Waves = () => {
  return (
    <WaveStyles>
        <svg id="visual" viewBox="0 0 1440 100" width="1440" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
            <rect x="0" y="0" width="1440" height="100"></rect>
            <path d="M0 22L34.3 23.3C68.7 24.7 137.3 27.3 205.8 31C274.3 34.7 342.7 39.3 411.2 41.3C479.7 43.3 548.3 42.7 617 39.3C685.7 36 754.3 30 823 25C891.7 20 960.3 16 1028.8 17.3C1097.3 18.7 1165.7 25.3 1234.2 30.7C1302.7 36 1371.3 40 1405.7 42L1440 44L1440 101L1405.7 101C1371.3 101 1302.7 101 1234.2 101C1165.7 101 1097.3 101 1028.8 101C960.3 101 891.7 101 823 101C754.3 101 685.7 101 617 101C548.3 101 479.7 101 411.2 101C342.7 101 274.3 101 205.8 101C137.3 101 68.7 101 34.3 101L0 101Z"></path>
            <path d="M0 69L34.3 62.3C68.7 55.7 137.3 42.3 205.8 40.8C274.3 39.3 342.7 49.7 411.2 53.8C479.7 58 548.3 56 617 56.5C685.7 57 754.3 60 823 56.3C891.7 52.7 960.3 42.3 1028.8 39.5C1097.3 36.7 1165.7 41.3 1234.2 42.3C1302.7 43.3 1371.3 40.7 1405.7 39.3L1440 38L1440 101L1405.7 101C1371.3 101 1302.7 101 1234.2 101C1165.7 101 1097.3 101 1028.8 101C960.3 101 891.7 101 823 101C754.3 101 685.7 101 617 101C548.3 101 479.7 101 411.2 101C342.7 101 274.3 101 205.8 101C137.3 101 68.7 101 34.3 101L0 101Z" fill="#323946"></path>
            <path d="M0 55L34.3 55.8C68.7 56.7 137.3 58.3 205.8 61C274.3 63.7 342.7 67.3 411.2 70C479.7 72.7 548.3 74.3 617 74.7C685.7 75 754.3 74 823 72.3C891.7 70.7 960.3 68.3 1028.8 69.2C1097.3 70 1165.7 74 1234.2 76.5C1302.7 79 1371.3 80 1405.7 80.5L1440 81L1440 101L1405.7 101C1371.3 101 1302.7 101 1234.2 101C1165.7 101 1097.3 101 1028.8 101C960.3 101 891.7 101 823 101C754.3 101 685.7 101 617 101C548.3 101 479.7 101 411.2 101C342.7 101 274.3 101 205.8 101C137.3 101 68.7 101 34.3 101L0 101Z" fill="#363d4c"></path>
            {/* <path d="M0 68L34.3 69.2C68.7 70.3 137.3 72.7 205.8 73.3C274.3 74 342.7 73 411.2 72.7C479.7 72.3 548.3 72.7 617 75.7C685.7 78.7 754.3 84.3 823 83.7C891.7 83 960.3 76 1028.8 74.7C1097.3 73.3 1165.7 77.7 1234.2 78.7C1302.7 79.7 1371.3 77.3 1405.7 76.2L1440 75L1440 101L1405.7 101C1371.3 101 1302.7 101 1234.2 101C1165.7 101 1097.3 101 1028.8 101C960.3 101 891.7 101 823 101C754.3 101 685.7 101 617 101C548.3 101 479.7 101 411.2 101C342.7 101 274.3 101 205.8 101C137.3 101 68.7 101 34.3 101L0 101Z" fill="#3b4252"></path> */}
        </svg>
    </WaveStyles>
  )
}

const Footer = () => {
  return (
    <>
    {/* <div className="spacer waves-1" /> */}
    <FooterStyles >
    <Waves />
        <FooterWrapper >
            <h1>Footer</h1>
            <div>
                <p>Flexbox Heroes is a project by <a href="#" target="_blank">Rohald van Merode</a></p>
            </div>
        </FooterWrapper>
    </FooterStyles>
    </>
  )
}
export default Footer
