import styled from 'styled-components';

interface SectionProps {
  color?: string;
}

export const Container = styled.section<SectionProps>`
  background: ${props => props.color};
`;
