import React from 'react';

import { Container } from './styles';

interface SectionProps {
  color?: string;
}

const Section: React.FC<SectionProps> = ({ color, children }) => {
  return <Container color={color}>{children}</Container>;
};

export default Section;
