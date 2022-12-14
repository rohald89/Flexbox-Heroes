import { createGlobalStyle } from 'styled-components';

const nord = {
  nord0: '#2e3440',
  nord1: '#3b4252',
  nord2: '#434c5e',
  nord3: '#4c566a',
  nord4: '#D8DEE9',
  nord5: '#e5E9F0',
  nord6: '#ECEFF4',
  nord7: '#8FBCBB',
  nord8: '#88C0D0',
  nord9: '#81A1C1',
  nord10: '#5E81AC',
  nord11: '#BC616A',
  nord12: '#D08770',
  nord13: '#EBCB8B',
  nord14: '#A3BE8C',
  nord15: '#B48EAD',
};

export const lightTheme = {
  body: '#F2F4F8',
  text: nord.nord3,
  background: 'white',
  shadow: 'rgba(184, 194, 215, 0.35) 0px 3px 6px 0px',
  shadowHover: 'rgba(184, 194, 215, 0.35) 0px 10px 20px 2px',
  accentHover: '#E8ECF1',
  accent: nord.nord4,
  focus: '#6580A9',
  wave1: "#F4F6F9",
  wave2: "#F8F9FB",
  wave3: "#FBFBFC",
//   wave3: nord.nord1,
  ...nord,
};

export const darkTheme = {
  body: '#252932',
  text: nord.nord6,
  background: nord.nord0,
  shadow: 'rgba(15, 17, 21, 0.2) 0px 3px 6px 0px',
  shadowHover: 'rgba(15, 17, 21, 0.2) 0px 10px 20px 2px',
  accentHover: nord.nord1,
  accent: nord.nord2,
  focus: '#6580A9',
  wave1: "#383D4B",
  wave2: "#3A404E",
  wave3: "#3C4251",
//   wave3: nord.nord1,
  ...nord,
};

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  min-height: 100vh;
  transition: background .3s ease,
    color .3s ease;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: 'Rubik', sans-serif;

  & > div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}

.spacer {
    aspect-ratio: 1440 /100;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.waves-1 {
    background-image: url('/waves-4.svg');
}
`;
