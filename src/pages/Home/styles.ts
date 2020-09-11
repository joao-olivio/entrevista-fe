import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  .card-list {
    display: flex;
    overflow: hidden;

    div + div {
      margin-left: 1.6em;
    }
  }
`;

export const Header = styled.section`
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
      background: var(--color-teriary);
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

  a {
    width: 15rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 0 1rem;

    background: var(--color-secondary);
    color: #fff;
    border: 0;

    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    transition: opacity 0.4s;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`;

export const LastEpisodes = styled.section`
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
      background: var(--color-teriary);
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

  button {
    width: 100%;
    margin-top: 3.2rem;
  }
`;

export const AboutTheShow = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6.4rem 4rem;

  background: var(--color-secondary) url();
  color: #fff;

  h2 {
    position: relative;

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
      background: var(--color-teriary);
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
    margin-bottom: 2rem;
    color: var(--light-gray);
    line-height: 2.2rem;
  }

  img {
    align-self: center;
    max-width: 100%;
  }
`;

export const ComingNext = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6.4rem 4rem;

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

      opacity: 0.05;
    }
  }

  img {
    align-self: center;
    max-width: 100%;
  }

  p {
    &.job-title {
      margin-bottom: 1rem;

      font-size: 2rem;
      font-weight: 300;

      &::after {
        content: '';
        display: block;
        width: 17rem;
        height: 2px;
        background: var(--color-teriary);
      }
    }

    &.person-name {
      font-size: 4rem;
      font-weight: 900;
      line-height: 3.2rem;
    }
  }
`;
