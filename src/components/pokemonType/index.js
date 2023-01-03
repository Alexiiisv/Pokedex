import React from 'react';
import {Text, View} from 'react-native';
import {AlignBaseline, TypeLabel} from './style';
export const PokemonType = ({pokemon, integer, color}) => {
  return (
    <AlignBaseline>
      <TypeLabel color={color}>
        {pokemon.pokemon.url.types[integer].type.name}
      </TypeLabel>
    </AlignBaseline>
  );
};
