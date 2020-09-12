import React from 'react';
import { MdEmail } from 'react-icons/md';

import logoBlack from '../../assets/logo-black.svg';
import manImg from '../../assets/man.png';
import womanImg from '../../assets/woman.png';
import blueCloud from '../../assets/cloud-blue.svg';

import Button from '../../components/Button';

import Card from '../../components/Card';
import Input from '../../components/Input';

import {
  Container,
  Header,
  LastEpisodes,
  AboutTheShow,
  ComingNext,
  Subscribe,
} from './styles';

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

        <Button color="black">Listen now</Button>
      </Header>

      <LastEpisodes>
        <h2>
          <span>
            Last <br />
            Episodes
          </span>
        </h2>

        <div className="card-list" />

        <Button color="blue">View More</Button>
      </LastEpisodes>

      <AboutTheShow>
        <h2>
          <span>
            About the <br />
            show
          </span>
        </h2>

        <p>
          So they stick around, kicking out feedback and I entertain it as if I
          need that <br /> I had a talk with my uncle and he agreed that my
          privacy about the only thing.
        </p>

        <img src={manImg} alt="man in office" />

        {/* <img src={blueCloud} alt="blue shape" className="blue-cloud" /> */}
      </AboutTheShow>

      <ComingNext>
        <h2>
          <span>
            Coming <br />
            Next
          </span>
        </h2>

        <img src={womanImg} alt="Danny Baker - Fake Company CTO" />

        <p className="job-title">Fake Company CTO</p>

        <p className="person-name">Danny Baker</p>
      </ComingNext>

      <Subscribe>
        <h2>
          <span>Subscribe</span>
        </h2>

        <p>
          Subscribe to our newsletter, to be always aware of our company events.
          <br />
          We build the most powerful and flexible tools for internet commerce.
        </p>

        <form onSubmit={() => {}}>
          <Input icon={MdEmail} placeholder="Type your email" />
          <Button color="blue">Send</Button>
        </form>
      </Subscribe>
    </Container>
  );
};

export default Home;
