import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 15em;

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
    width: 100%;
  }

  p {
    font-size: 2.8rem;
    font-weight: 300;
    text-align: center;
  }

  a {
    width: 15rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
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

  &::before {
    content: 'Podcast';
    position: absolute;
    top: -2rem;

    font-size: 7rem;
    font-weight: 900;

    opacity: 0.05;
  }
`;

export const LastEpisodes = styled.div``;
