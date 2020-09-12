import styled from 'styled-components';

export const Container = styled.div`
  height: 5rem;

  display: flex;
  align-items: center;
  padding: 1.6rem;

  background: #fff;
  border: 1px solid var(--light-gray);

  svg {
    margin-right: 1rem;
    color: var(--color-secondary);
  }

  input {
    flex: 1;

    background: transparent;
    border: 0;

    &::placeholder {
      color: var(--gray);
    }
  }
`;
