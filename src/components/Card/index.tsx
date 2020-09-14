import React from 'react';
import { Link } from 'react-router-dom';
import { MdPlayCircleFilled, MdAccessTime } from 'react-icons/md';

import { Container, Footer } from './styles';

interface CardProps {
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ linkTo }) => {
  return (
    <Container>
      <Link to={linkTo}>
        <div className="title">Data structures</div>
        <div className="creator">Jaqueline Cardozo</div>
        <div className="job-title">Front-end Dev Leader</div>

        <Footer>
          <MdPlayCircleFilled size={40} />

          <div className="duration">
            <MdAccessTime size={24} />
            <span>28 min</span>
          </div>
        </Footer>
      </Link>
    </Container>
  );
};

export default Card;
