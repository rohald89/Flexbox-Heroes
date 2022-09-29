import Head from 'next/head'
import styled from 'styled-components';
import CodeEditor from '../components/CodeEditor';
import Description from '../data/challenges/1.mdx';
import GameBoard from '../components/GameBoard';

const MainWrapper = styled.main`
    display: flex;
    padding: 1rem;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
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
                <Description />
                <CodeEditor />
            </LeftSide>
            <div>
                <GameBoard />
            </div>
        </MainWrapper>
    </div>
  )
}
