import React from 'react';
import {Background, ThumbnaiContainerr} from './style';

export const BackgroundMain = ({pokemon, color}) => {
  const typeColor0 = color[pokemon.pokemon.url.types[0].type.name];
  if (pokemon.pokemon.url.types.length !== 1) {
    const typeColor1 = color[pokemon.pokemon.url.types[1].type.name];
    return (
      <Background>
        <ThumbnaiContainerr color={typeColor0} width={'50%'} />
        <ThumbnaiContainerr color={typeColor1} width={'50%'} />
      </Background>
    );
  } else {
    return (
      <Background>
        <ThumbnaiContainerr color={typeColor0} width={'100%'} />
      </Background>
    );
  }
};
