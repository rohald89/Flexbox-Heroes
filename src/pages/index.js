import Head from 'next/head'
import styled from 'styled-components';

const Section = styled.section`
    position: relative;
    padding-block: 100px;
    background-color: ${({ color, theme }) => theme[color]};
    `;
const SectionWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-block: 4rem;
`;

const Wave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: ${({ transform }) => transform};

    svg {
        position: relative;
        display: block;
        width: ${({ width }) => width};
        height: 100px;
    }
    .wave-1 {
        fill: ${({ theme }) => theme.background};
    }
    .wave-2 {
        fill: ${({ theme }) => theme.background};
    }
    .wave-3 {
        fill: ${({ theme }) => theme.body};
    }
`;

export default function Home() {
  return (
    <>
        <Head>
            <title>Flexbox Heroes</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Section>
            <SectionWrapper>
                <h1>Welcome to FlexboxHeroes</h1>
                <h2>Your one stop shop for all things Flexbox</h2>
            </SectionWrapper>
            <Wave transform="rotate(180deg) matrix(-1, 0, 0, 1, 0, 0)" width="calc(143% + 1.3px)">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-1"></path>
                </svg>
            </Wave>
        </Section>
        <Section color='background'>
            <SectionWrapper>
                <h3>What is Flexbox?</h3>
                <p>Flexbox is a CSS layout mode that makes it easy to design flexible responsive layout structure without using float or positioning.</p>
                <h3>What is Flexbox Heroes?</h3>
                <p>FlexBox Heroes is a game that will help you learn Flexbox by playing a game. You will be presented with a series of challenges and you will have to use Flexbox to solve them.</p>
                <h3>How do I play?</h3>
                <p>Click on the "Play" button to start the game. You will be presented with a series of challenges. You will have to use Flexbox to solve them. You can use the "Solution" button to see the solution to the challenge. You can also use the "Reset" button to reset the challenge. You can use the "Next" button to move to the next challenge.</p>
                <h3>How do I win?</h3>
                <p>There is no winning or losing. You can play as many times as you want. You can also use the "Solution" button to see the solution to the challenge. You can also use the "Reset" button to reset the challenge. You can use the "Next" button to move to the next challenge.</p>
            </SectionWrapper>
            <Wave transform="rotate(180deg)" width="calc(233% + 1.3px)">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="wave-3"></path>
                </svg>
            </Wave>
        </Section>
        <Section color="body">
            <SectionWrapper>
                <h3>How do I win?</h3>
                <p>There is no winning or losing. You can play as many times as you want. You can also use the "Solution" button to see the solution to the challenge. You can also use the "Reset" button to reset the challenge. You can use the "Next" button to move to the next challenge.</p>
                <h3>How do I win?</h3>
            </SectionWrapper>
        </Section>
    </>
  )
}
