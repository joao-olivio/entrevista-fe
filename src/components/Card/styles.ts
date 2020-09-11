import styled from 'styled-components';

export const Container = styled.div`
  width: 24rem;
  height: 28rem;
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  padding: 3.2rem;

  div.title {
    margin-bottom: 0.8rem;

    font-size: 2.8rem;
    font-weight: 300;
    line-height: 3.2rem;
    text-transform: uppercase;
  }

  div.creator {
    margin-bottom: 0.4rem;
    font-size: 1.6rem;
    font-weight: 600;
  }

  div.job-title {
    color: var(--gray);
    font-size: 1.3rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  button.play-button {
    background: transparent;
    border: 0;
  }

  div.duration {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5em;
    }
  }
`;
