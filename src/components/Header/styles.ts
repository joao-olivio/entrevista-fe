import styled, { css } from 'styled-components';

interface MenuProps {
  open: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.div<MenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--color-secondary);
  color: #fff;

  transform: translateX(-100%);

  transition: transform 0.4s;

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}

  div.logo-img {
    margin-top: 4.2em;

    &::after {
      content: '';
      display: block;
      width: 9rem;
      height: 2px;
      margin: 1rem auto 0;
      background: var(--color-teriary);
    }
  }

  p {
    font-size: 2.4rem;
    font-weight: 300;
  }
`;

export const Links = styled.ul`
  list-style: none;
  margin: 4.8em 0;

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

        background: var(--color-teriary);
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
    }
  }
`;

export const HamburgerButton = styled.div<MenuProps>`
  position: relative;
  z-index: 9;

  height: 4.8rem;

  .hamburger-react {
    ${props =>
      props.open &&
      css`
        position: fixed;
        top: 0;
      `}
  }
`;
