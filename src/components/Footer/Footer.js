import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {
  FaHeart, FaFacebook, FaGithub, FaTwitter, FaSlack,
} from 'react-icons/fa';

import { gray00, darkGreen, below } from '../../utilities';

const Footer = () => (
  <Grid>
    <TextWrapper>
      <p>
        Made with
        {' '}
        <FaHeart style={{ color: 'red', width: '14px', paddingTop: '2px' }} />
        {' '}
        by freeCodeCamp Aveiro
      </p>
    </TextWrapper>
    <LinksWrapper>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle', margin: '0px 15px' }, size: '1.5em' }}>
        <FaFacebook />
        <FaGithub />
        <FaTwitter />
        <FaSlack />
      </IconContext.Provider>
    </LinksWrapper>
  </Grid>
);

export default Footer;

const Grid = styled.div`
  background-color: ${darkGreen};
  color: ${gray00};
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50px;

  ${below.s`
    grid-template-columns: 60% 40%;
  `}
`;

const TextWrapper = styled.div`
  grid-column: 1 / 2;
  align-self: center;
  padding-left: 90px;
  font-size: 15px;

  ${below.xxl`
    padding-left: 60px;
  `}

  ${below.xl`
    padding-left: 50px;
  `}

  ${below.l`
    padding-left: 40px;
  `}
`;

const LinksWrapper = styled.div`
  grid-column: 2 / 3;
  align-self: center;
`;
