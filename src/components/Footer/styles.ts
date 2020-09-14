import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-secondary);
`;

export const Content = styled.div`
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  padding: 6.4em 0;

  border-top: 1px solid var(--dark-gray);

  div.logo-img {
    &::after {
      content: '';
      display: block;
      width: 12rem;
      height: 2px;
      margin: 1rem auto;
      background: var(--color-tertiary);
    }
  }

  p.copyright {
    color: var(--light-gray);
  }
`;

export const Links = styled.ul`
  list-style: none;
  margin: 6.4em 0 7.2em;

  @media (min-width: 48em) {
    display: flex;
    margin: 4em 0 7.2em;
  }

  li {
    text-align: center;

    a {
      min-width: 12rem;
      height: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      color: #fff;

      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;

      &::after {
        content: '';

        display: block;
        width: 0;
        height: 1px;
        margin-top: 0.4rem;

        background: var(--color-tertiary);
        transition: width 0.4s;
      }

      &:hover,
      &:focus {
        &::after {
          width: 100%;
        }
      }
    }

    & + li {
      margin-top: 2.4em;

      @media (min-width: 48em) {
        margin-top: 0;
      }
    }
  }
`;
