import React from 'react';
import styled from 'styled-components';

import ProviderText from './ProviderText';
import Card from './Card';

import { below } from '../../utilities';

const Provide = props => (
  <Grid>
    <ProviderText data={props.data ? props.data.second_block_content : ''} />
    <Card data={props.data ? props.data.second_block_content : ''} />
  </Grid>
);

export default Provide;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
  grid-template-rows: minmax(400px, 1fr);

  ${below.xxl`
    grid-template-columns: 40px 2fr 2fr 2fr 40px;
  `}

${below.xl`
    grid-template-columns: 10px 2fr 2fr 2fr 10px;
    grid-template-rows: minmax(425px, 1fr);
  `}

${below.l`
  grid-template-rows: minmax(450px, 1fr);
`}

${below.m`
    grid-template-columns: 10px 2fr 10px;
    grid-template-rows: 350px 400px;
  `}

${below.s`
    grid-template-columns: 10px 2fr 10px;
    grid-template-rows: 350px 400px 400px;
  `}
`;
