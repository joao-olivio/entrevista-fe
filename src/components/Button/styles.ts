import styled, { css } from 'styled-components';

interface ButtonProps {
  color?: string;
}

export const Container = styled.button<ButtonProps>`
  height: 5rem;
  border: 0;
  padding: 0 1rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: opacity 0.4s, background-color 0.4s, color 0.4s;

  ${props =>
    props.color === 'black' &&
    css`
      background: var(--color-secondary);
      color: #fff;

      &:hover,
      &:focus {
        opacity: 0.8;
      }
    `}

  ${props =>
    props.color === 'black-border' &&
    css`
      background: transparent;
      color: var(--color-secondary);
      border: 1px solid var(--color-secondary);

      &:hover,
      &:focus {
        background: var(--color-secondary);
        color: #fff;
      }
    `}

  ${props =>
    props.color === 'blue' &&
    css`
      background: var(--color-tertiary);
      color: var(--color-secondary);

      &:hover,
      &:focus {
        opacity: 0.8;
      }
    `}
`;
