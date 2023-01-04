import React from 'react';
import {Text, View} from 'react-native';
import {ImagePoke} from '../pokemonImage';
import {PokemonLabel} from './style';

export const PokemonEvolutionView = ({text, sprites}) => {
  return (
    <View>
      <PokemonLabel>{text}</PokemonLabel>
      <ImagePoke sprites={sprites} />
    </View>
  );
};
