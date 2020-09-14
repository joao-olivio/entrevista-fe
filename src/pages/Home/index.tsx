import React from 'react';
import { MdEmail } from 'react-icons/md';

import Section from '../../components/Section';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoBlack from '../../assets/logo-black.svg';
import manImg from '../../assets/man.png';
import womanImg from '../../assets/woman.png';
import whiteCloud from '../../assets/cloud-white.svg';

import { colors } from '../../styles/global';

import {
  Container,
  Header,
  LastEpisodes,
  EpisodesFilter,
  AboutTheShow,
  ComingNext,
  ComingNextText,
  PictureLegend,
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

        <EpisodesFilter>
          <li>
            <Button>All</Button>
          </li>
          <li>
            <Button>Development</Button>
          </li>
          <li>
            <Button>Design</Button>
          </li>
          <li>
            <Button>Project Management</Button>
          </li>
        </EpisodesFilter>

        <div className="card-list">
          <Card linkTo="#" />
        </div>

        <Button color="black-border">View More</Button>
      </LastEpisodes>

      <Section color={colors.colorSecondary}>
        <AboutTheShow>
          <div>
            <h2>
              <span>
                About the <br />
                show
              </span>
            </h2>

            <p>
              So they stick around, kicking out feedback and I entertain it as
              if I had a talk with my uncle and he agreed that my privacy about
              the only thing.
            </p>

            <p>
              I had a talk with my uncle and he agreed that my privacy about the
              only thing.
            </p>
          </div>

          <div>
            <img src={manImg} alt="man in office" />
          </div>
        </AboutTheShow>
      </Section>

      <Section>
        <ComingNext>
          <ComingNextText>
            <h2>
              <span>
                Coming <br />
                Next
              </span>
            </h2>

            <p>
              Body placeholder for text paragraph. A paragraph is a
              self-contained unit of text dealing with a particular point or
              idea is a self-contained unit of text dealing with a particular
              point or idea.
            </p>
          </ComingNextText>

          <PictureLegend>
            <img src={womanImg} alt="Danny Baker - Fake Company CTO" />

            <div>
              <p className="job-title">Fake Company CTO</p>

              <p className="person-name">Danny Baker</p>
              <img src={whiteCloud} alt="" />
            </div>
          </PictureLegend>
        </ComingNext>
      </Section>

      <Section color={colors.colorSecondary}>
        <Subscribe>
          <h2>
            <span>Subscribe</span>
          </h2>

          <p>
            Subscribe to our newsletter, to be always aware of our company
            events.
            <br />
            We build the most powerful and flexible tools for internet commerce.
          </p>

          <form onSubmit={() => {}}>
            <Input icon={MdEmail} placeholder="Type your email" />
            <Button color="blue">Send</Button>
          </form>
        </Subscribe>
      </Section>
    </Container>
  );
};

export default Home;
