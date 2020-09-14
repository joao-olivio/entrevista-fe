import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Squash as Hamburger } from 'hamburger-react';

import logoWhite from '../../assets/logo-white.svg';

import { Container, HamburgerButton, Menu, Links } from './styles';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState('#111');

  const toggleMenu = useCallback(() => {
    if (!menuOpen) {
      setMenuOpen(true);
      setHamburgerColor('#fff');
    } else {
      setMenuOpen(false);
      setHamburgerColor('#111');
    }
  }, [menuOpen]);

  return (
    <Container>
      <Menu open={menuOpen}>
        <div className="logo-img">
          <img src={logoWhite} alt="valtech" />
        </div>
        <p>The Podcast</p>

        <Links>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">The show</Link>
          </li>
          <li>
            <Link to="/">Episodes</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </Links>
      </Menu>

      <HamburgerButton onClick={toggleMenu} open={menuOpen}>
        <Hamburger size={24} color={hamburgerColor} />
      </HamburgerButton>
    </Container>
  );
};

export default Header;
