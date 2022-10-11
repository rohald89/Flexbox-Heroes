import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 2px solid ${({theme}) => theme.border };
`;

const NavStyles = styled.nav`
  ul {
    font-family: 'Rubik', 'sans-serif';
    line-height: 1.5;
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  ul li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  ul li a {
    text-decoration: none;
    color: inherit;
    font-size: 1.125rem;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    &:hover {
      background-color: ${({ theme }) => theme.accentHover};
    }
  }
`;
const Header = () => {
  return (
    <HeaderStyles>
      <h1>FlexboxHeroes</h1>
      <NavStyles>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="challenges">Challenges</Link>
          </li>
          <li>
            <Link href="playground">Playground</Link>
          </li>
        </ul>
      </NavStyles>
    </HeaderStyles>
  );
};

export default Header;
