import React from 'react';
import styled from 'styled-components';

import { Button } from '../../elements';

import {
  gray10, darkGreen, elevation, below, above,
} from '../../utilities';

const Card = props => (
  <>
    <Container>
      {/* {console.log(props.data.cards)} */}
      {props.data
        && props.data.cards.map(d => (
          <Wrapper>
            <h2>{d.title}</h2>
            <p>{d.description}</p>
            <ButtonWrapper>
              <Button modifiers="square" href={d.link}>
                Modified
              </Button>
            </ButtonWrapper>
          </Wrapper>
        ))}
    </Container>
  </>
);

export default Card;

const Wrapper = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
  background-color: ${gray10};
  height: 90%;
  width: 90%;
  padding: 20px;
  ${elevation[2]};
  margin-left: 20px;

  ${below.m`
    margin: 10px 20px;
  `}

  & h2 {
    color: ${darkGreen};
    padding-bottom: 40px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
`;

const Container = styled.div`
  ${above.m`
    grid-column: 3 / 5;
    grid-row: 1 / 2
    display: flex;
  `}

  ${below.m`
    grid-column: 2 / 3;
    grid-row: 2 / 3
    display: flex;
  `}

  ${below.s`
    grid-row: 2 / 4
    display: grid;
  `}
`;
