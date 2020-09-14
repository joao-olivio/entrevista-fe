import React from 'react';
import { Link } from 'react-router-dom';

import logoWhite from '../../assets/logo-white.svg';

import { Container, Content, Links } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="logo-img">
          <img src={logoWhite} alt="valtech" />
        </div>

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

        <p className="copyright">2020 Valtech All rights reserved</p>
      </Content>
    </Container>
  );
};

export default Footer;
