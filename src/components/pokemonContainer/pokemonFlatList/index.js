// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {getAllInfosOfOnePokemon} from '../../../utils/pokemon';
import {
  PokemonContainer,
  PokemonLabel,
  PokemonThumbnail,
  TouchableOpacityContainer,
} from './style';

export const PokemonFL = ({item, navigation}) => {
  return (
    <TouchableOpacityContainer
      key={item.name}
      onPress={async () => {
        await getAllInfosOfOnePokemon(item.infos.pokemon.name);
        navigation.navigate('Pokemon');
      }}>
      <PokemonContainer>
        <PokemonLabel>{item.name}</PokemonLabel>
        <PokemonThumbnail source={{uri: item.infos.sprites.front_default}} />
      </PokemonContainer>
    </TouchableOpacityContainer>
  );
};
