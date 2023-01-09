// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {getAllInfosOfOnePokemon} from '../../../utils/pokemon';
import {ImagePoke} from '../pokemonImage';
import {
  PokemonContainer,
  PokemonLabel,
  TouchableOpacityContainer,
} from './style';

export const PokemonFL = ({navigation, name, sprites}) => {
  const color = {
    normal: '#ADA594',
    fighting: '#A55239',
    flying: '#9CADF7',
    poison: '#B55AA5',
    ground: '#D6B55A',
    rock: '#BDA55A',
    bug: '#ADBD21',
    ghost: '#6363B5',
    steel: '#ADADC6',
    grass: '#7BCE52',
    fire: '#F75231',
    water: '#399CFF',
    electric: '#FFC631',
    psychic: '#FF73A5',
    ice: '#5ACEE7',
    dragon: '#8858F6',
    dark: '#735A4A',
    fairy: '#E09AE3',
  };
  return (
    <TouchableOpacityContainer
      disable
      key={name}
      onPress={async () => {
        await getAllInfosOfOnePokemon(name);
        navigation.navigate('Pokemon');
      }}>
      <PokemonContainer>
        <PokemonLabel>{name}</PokemonLabel>
        <ImagePoke sprites={sprites} />
      </PokemonContainer>
    </TouchableOpacityContainer>
  );
};
