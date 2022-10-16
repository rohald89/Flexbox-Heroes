import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { HeaderStyles, HeaderWrapper, NavStyles } from './styled';



const Header = () => {
  return (
    <HeaderStyles>
      <HeaderWrapper>
      <h1>FlexboxHeroes</h1>
      <NavStyles>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/properties">Properties</Link>
          </li>
          <li>
            <Link href="/challenges">Challenges</Link>
          </li>
          <li>
            <Link href="/playground">Playground</Link>
          </li>
        </ul>
        <ThemeToggle />
      </NavStyles>
      </HeaderWrapper>
    </HeaderStyles>
  );
};

export default Header;
