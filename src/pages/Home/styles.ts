import styled from 'styled-components';

import blueCloud from '../../assets/cloud-blue.svg';

const Wrapper = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`;

export const Container = styled.div`
  flex: 1;
`;

// sections
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 15em 0 12em;

  div.logo-img {
    &::after {
      content: '';
      display: block;
      width: 11rem;
      height: 2px;
      margin: 1rem auto;
      background: var(--color-tertiary);
    }
  }

  img {
    max-width: 100%;
  }

  p {
    position: relative;

    font-size: 2.8rem;
    font-weight: 300;
    text-align: center;

    &::before {
      content: 'Podcast';
      position: absolute;
      top: -9rem;
      left: -5.5rem;

      font-size: 7rem;
      font-weight: 900;

      opacity: 0.05;
    }
  }

  button {
    width: 15rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 0 1rem;
  }
`;

export const LastEpisodes = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
  padding: 0 4rem;

  h2 {
    position: relative;

    font-size: 4rem;
    line-height: 3.6rem;
    letter-spacing: -1.5px;

    &::after {
      content: '';
      display: block;
      width: 17rem;
      height: 2px;
      margin: 1.6rem 0 2rem;
      background: var(--color-tertiary);
    }

    &::before {
      content: 'Episodes';
      position: absolute;
      top: 2rem;
      left: -3.25rem;

      font-size: 7rem;
      font-weight: 900;

      opacity: 0.05;
    }
  }

  > button {
    margin-top: 3.2rem;

    @media (min-width: 48em) {
      align-self: center;
      width: 15rem;
    }
  }
`;

export const AboutTheShow = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  padding: 6.4rem 4rem 12rem;
  color: #fff;

  @media (min-width: 48em) {
    flex-direction: row;
    align-items: center;
    padding: 16rem 4rem;
  }

  > div {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    position: relative;
    width: 100%;

    font-size: 4rem;
    line-height: 8rem;
    letter-spacing: -1.5px;

    span {
      display: block;
      line-height: 4rem;
    }

    &::after {
      content: '';
      display: block;
      width: 17rem;
      height: 2px;
      margin: 1.6rem 0 2rem;
      background: var(--color-tertiary);
    }

    &::before {
      content: 'About the show';
      position: absolute;
      top: -4rem;
      left: -2rem;

      font-size: 9rem;
      font-weight: 900;

      opacity: 0.05;
    }
  }

  p {
    align-self: flex-start;
    color: var(--light-gray);
    line-height: 2.2rem;

    & + p {
      margin-bottom: 2rem;

      @media (min-width: 48em) {
        margin-bottom: 0;
      }
    }

    @media (min-width: 48em) {
      width: 75%;
    }
  }

  img {
    max-width: 100%;

    @media (min-width: 48em) {
      width: 100%;
    }
  }
`;

export const ComingNext = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  margin-top: -10rem;
  padding: 8rem 4rem 15rem;

  background: url(${blueCloud}) no-repeat;
  background-position: 40% -25vw;
  background-size: 180vw;

  @media (min-width: 48em) {
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 0;
    padding: 8rem 4rem 8rem;
    background: none;
  }

  h2 {
    position: relative;
    margin-bottom: 2rem;

    font-size: 4rem;
    line-height: 8rem;
    letter-spacing: -1.5px;

    span {
      display: block;
      line-height: 4rem;
    }

    &::before {
      content: 'Next';
      position: absolute;
      top: -2rem;
      left: 0rem;

      font-size: 10rem;
      font-weight: 900;

      opacity: 0.1;
    }
  }

  img {
    align-self: center;
    max-width: 100%;
  }
`;

export const Subscribe = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  padding: 6.4rem 4rem;

  color: #fff;

  @media (min-width: 48em) {
    align-items: center;

    padding: 28rem 4rem 12rem;
    text-align: center;
  }

  h2 {
    position: relative;

    font-size: 4rem;
    line-height: 1;
    letter-spacing: -1.5px;

    @media (min-width: 48em) {
      font-size: 8rem;
    }

    span {
      display: block;
    }

    &::after {
      content: '';
      display: block;
      width: 19rem;
      height: 2px;
      margin: 1.6rem 0 2rem;
      background: var(--color-tertiary);

      @media (min-width: 48em) {
        width: 100%;
      }
    }

    &::before {
      content: 'Subscribe';
      position: absolute;
      top: 0;
      left: 0;

      font-size: 6rem;
      font-weight: 900;

      opacity: 0.05;
      transform: translate(-5%, -5%);

      @media (min-width: 48em) {
        font-size: 15rem;
        transform: translate(-25%, -30%);
      }
    }
  }

  p {
    margin-bottom: 2rem;
    line-height: 2.2rem;

    @media (min-width: 48em) {
      font-size: 1.8rem;
      line-height: 2.8rem;
    }
  }

  form {
    @media (min-width: 48em) {
      display: flex;
      align-items: center;
    }

    > div {
      @media (min-width: 48em) {
        border-radius: 4px 0 0 4px;
      }
    }
  }

  button {
    width: 100%;

    margin-top: 1.6rem;

    @media (min-width: 48em) {
      width: 13rem;
      margin-top: 0;
      border-radius: 0 4px 4px 0;
    }
  }
`;

// Micro-components
export const EpisodesFilter = styled.ul`
  list-style: none;

  display: none;
  justify-content: space-between;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    background: transparent;
  }

  @media (min-width: 48em) {
    display: flex;
  }
`;

export const ComingNextText = styled.div`
  flex: 1;

  p {
    display: none;

    @media (min-width: 48em) {
      display: block;
    }
  }
`;

export const PictureLegend = styled.div`
  flex: 1;
  position: relative;

  @media (min-width: 48em) {
    margin-right: 9rem;
  }

  > div {
    position: relative;

    img {
      max-width: unset;
      width: 50rem;
      position: absolute;
      bottom: -15rem;
      left: -3rem;

      @media (min-width: 48em) {
        width: 32rem;
        bottom: -3.5rem;
        left: -6.2rem;
      }
    }

    @media (min-width: 48em) {
      position: absolute;
      bottom: 5%;
      left: 5%;
    }
  }

  p {
    position: relative;
    z-index: 1;

    &.job-title {
      margin-bottom: 1rem;

      font-size: 2rem;
      font-weight: 300;

      &::after {
        content: '';
        display: block;
        width: 17rem;
        height: 2px;
        background: var(--color-tertiary);
      }
    }

    &.person-name {
      font-size: 4rem;
      font-weight: 900;
      line-height: 3.2rem;

      @media (min-width: 48em) {
        font-size: 6rem;
        line-height: 5rem;
      }
    }
  }
`;
