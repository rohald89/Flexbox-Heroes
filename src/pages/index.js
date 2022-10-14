import Head from 'next/head'
import styled from 'styled-components';
import CodeEditor from '../components/CodeEditor';
import GameBoard from '../components/previews/GameBoard';

const MainWrapper = styled.main`
    display: flex;
    padding: 1rem;
    background: ${props => props.background};
    color: ${props => props.text};
`;


const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 50%;
`;


export default function Home() {

  return (
    <div className="container">
        <Head>
            <title>Flexbox Heroes</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainWrapper >
            <LeftSide>
                <CodeEditor />
            </LeftSide>
            <div>
                <GameBoard />
            </div>
        </MainWrapper>
    </div>
  )
}
