import React from 'react';
import {Text} from 'react-native';
import {PokemonType} from '../pokemonType';
import {AlignCenter, MainLabel, PokemonTypeContainer} from './style';

export const TypeContainer = ({pokemon, color}) => {
  const typeColor0 = color[pokemon.pokemon.url.types[0].type.name];
  if (pokemon.pokemon.url.types.length !== 1) {
    const typeColor1 = color[pokemon.pokemon.url.types[1].type.name];
    return (
      <AlignCenter>
        <MainLabel>Pokemon types</MainLabel>
        <PokemonTypeContainer>
          <PokemonType pokemon={pokemon} integer={0} color={typeColor0} />
          <PokemonType pokemon={pokemon} integer={1} color={typeColor1} />
        </PokemonTypeContainer>
      </AlignCenter>
    );
  } else {
    return (
      <AlignCenter>
        <MainLabel>Pokemon type</MainLabel>
        <PokemonTypeContainer>
          <PokemonType pokemon={pokemon} integer={0} color={typeColor0} />
        </PokemonTypeContainer>
      </AlignCenter>
    );
  }
};
