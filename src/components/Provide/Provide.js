import React from 'react';
import styled from 'styled-components';

import ProviderText from './ProviderText';
import Card from './Card';
import Card2 from './Card2';

const Provide = () => (
  <Grid>
    <ProviderText />
    <Card />
    <Card2 />
  </Grid>
);

export default Provide;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
  grid-template-rows: minmax(400px, 1fr);
`;
