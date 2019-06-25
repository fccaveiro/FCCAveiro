import React from 'react';
import styled from 'styled-components';

import { Button } from '../../elements';

import { darkGreen, below } from '../../utilities';

const CtaText = props => (
  <TextWrapper>
    <h1>{props.data.title && props.data.title}</h1>
    <h3>{props.data.sub_title && props.data.sub_title}</h3>
    <Button href={props.data.saber && props.data.saber}>Learn More</Button>
  </TextWrapper>
);

export default CtaText;

const TextWrapper = styled.div`
  grid-column: 1 / 2;
  align-self: center;
  padding-left: 90px;

  ${below.xxl`
    padding-left: 70px;
  `}

  ${below.xl`
    padding-left: 50px;
  `}

${below.l`
    padding-left: 40px;
  `}

  & h1 {
    font-size: 40px;
    font-weight: 800;
    color: ${darkGreen};
    padding-bottom: 40px;

    ${below.m`
      font-size: 28px;
      padding-bottom: 20px;
    `}
  }

  & h3 {
    padding-bottom: 60px;
    color: ${props => props.theme.colors.primary};

    ${below.m`
      font-size: 18px;
      padding-bottom: 40px;
    `}
  }
`;
