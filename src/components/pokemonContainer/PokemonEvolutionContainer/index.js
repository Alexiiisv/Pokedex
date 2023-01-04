import React from 'react';
import {PokemonEvolution} from '../pokemonEvolution';
import {AlignCenter, MainLabel} from './style';

export const PokemonEvolutionContainer = ({pokemon}) => {
  return (
    <AlignCenter>
      <MainLabel>Evolution</MainLabel>
      <PokemonEvolution pokemon={pokemon} />
    </AlignCenter>
  );
};
