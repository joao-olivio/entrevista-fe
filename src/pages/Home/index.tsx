import React from 'react';
import { Link } from 'react-router-dom';

import logoBlack from '../../assets/logo-black.svg';
import Button from '../../components/Button';

import { Container, Header, LastEpisodes } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          <img src={logoBlack} alt="valtech" />
          <p>The Podcast</p>
        </h1>

        <Link to="/">Listen now</Link>
      </Header>

      <LastEpisodes />
    </Container>
  );
};

export default Home;
