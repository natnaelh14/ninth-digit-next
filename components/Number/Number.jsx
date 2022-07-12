import React from 'react';
import { SingleNumber, NumberContainer } from './Number.styles'

const Number = ({ num }) => {
  return (
    <NumberContainer
      className='tc dib br3 ph3-ns ma2 grow bw2 shadow-5'
    >
      <SingleNumber>{num}</SingleNumber>
    </NumberContainer>
  );
};

export default Number;
