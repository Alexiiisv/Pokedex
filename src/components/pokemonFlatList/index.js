// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {getAllInfosOfOnePokemon} from '../../utils/pokemon';
import {PokemonContainer, PokemonLabel, PokemonThumbnail} from './style';

const PokemonFL = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={{width: '50%'}}
      onPress={async () => {
        await getAllInfosOfOnePokemon(item.infos.pokemon.name);
        navigation.navigate('Pokemon');
      }}>
      <PokemonContainer>
        <PokemonLabel>{item.name}</PokemonLabel>
        <PokemonThumbnail source={{uri: item.infos.sprites.front_default}} />
      </PokemonContainer>
    </TouchableOpacity>
  );
};

export default PokemonFL;
