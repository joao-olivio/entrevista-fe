import React from 'react';
import { MdPlayCircleFilled, MdAccessTime } from 'react-icons/md';

import { Container, Footer } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <div className="title">Data structures</div>
      <div className="creator">Jaqueline Cardozo</div>
      <div className="job-title">Front-end Dev Leader</div>

      <Footer>
        <button type="button" className="play-button">
          <MdPlayCircleFilled size={40} />
        </button>

        <div className="duration">
          <MdAccessTime size={24} />
          <span>28 min</span>
        </div>
      </Footer>
    </Container>
  );
};

export default Card;
