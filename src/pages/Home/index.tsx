import React from 'react';
import { Link } from 'react-router-dom';

import logoBlack from '../../assets/logo-black.svg';

import Card from '../../components/Card';

import { Container, Header, LastEpisodes } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          <div className="logo-img">
            <img src={logoBlack} alt="valtech" />
          </div>

          <p>The Podcast</p>
        </h1>

        <Link to="/">Listen now</Link>
      </Header>

      <LastEpisodes>
        <h2>
          Last <br />
          Eposodes
        </h2>

        <div className="card-list">
          <Card />
        </div>
      </LastEpisodes>
    </Container>
  );
};

export default Home;
