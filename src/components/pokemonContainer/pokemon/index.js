import React from 'react';
import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {BackgroundMain} from '../pokemonBackground';
import {TypeContainer} from '../pokemonTypeContainer';
import {MyBackButton} from '../../returnBack';
import {PokemonLabel, ThumbnaiContainer} from './style';
import {PokemonDescription} from '../pokemonDescription';
import {ImagePoke} from '../pokemonImage';
import {PokemonSwitchView} from '../pokemonSwitchView';
import {SvgUri} from 'react-native-svg';

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
  const funId = () => {
    const description = pokemon.pokemon.url.species.url.flavor_text_entries;
    var result;
    description.map(desc => {
      if (desc.language.name === 'en') {
        result = desc.flavor_text;
      }
    });
    return result;
  };
  return (
    <ScrollView>
      <BackgroundMain pokemon={pokemon} color={color} />
      <ThumbnaiContainer color={typeColor0}>
        <ImagePoke sprites={pokemon.pokemon.url.sprites} />
        <PokemonLabel>{pokemon.name}</PokemonLabel>
      </ThumbnaiContainer>
      <MyBackButton navigation={navigation} isGoBack={true} />
      <PokemonDescription text={funId()} />
      <TypeContainer color={color} pokemon={pokemon} />
      <PokemonSwitchView pokemon={pokemon} />
    </ScrollView>
  );
};
