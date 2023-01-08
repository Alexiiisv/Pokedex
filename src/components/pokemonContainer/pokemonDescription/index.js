import React from 'react';
import {AlignCenter, Description, MainLabel} from './style';

export const PokemonDescription = ({text}) => {
  return (
    <AlignCenter>
      <MainLabel>Description</MainLabel>
      <Description>{text}</Description>
    </AlignCenter>
  );
};
