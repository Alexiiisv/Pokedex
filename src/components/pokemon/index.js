import React from 'react';
import {ScrollView, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {BackgroundMain} from '../pokemonBackground';
import {PokemonStatsContainer} from '../pokemonStatsContainer';
import {TypeContainer} from '../pokemonTypeContainer';
import {MyBackButton} from '../returnBack';
import {PokemonLabel, ThumbnaiContainer} from './style';

export const PokemonMainPage = ({pokemon, navigation}) => {
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
  const typeColor0 = color[pokemon.pokemon.url.types[0].type.name];

  return (
    <ScrollView>
      <BackgroundMain pokemon={pokemon} color={color} />
      <ThumbnaiContainer color={typeColor0}>
        <SvgUri
          width="150px"
          height="150px"
          uri={pokemon.pokemon.url.sprites.other.dream_world.front_default}
        />
        <PokemonLabel>{pokemon.name}</PokemonLabel>
      </ThumbnaiContainer>
      <TypeContainer color={color} pokemon={pokemon} />
      <PokemonStatsContainer pokemon={pokemon} />
      <MyBackButton title={'Retour au pokedex'} navigation={navigation} />
    </ScrollView>
  );
};
