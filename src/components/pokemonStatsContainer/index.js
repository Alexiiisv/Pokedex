import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {AlignCenter, MainLabel, PokemonContainer, PokemonTC} from './style';

export const PokemonStatsContainer = ({pokemon}) => {
  const Section = datainfos => {
    console.log(datainfos);
    datainfos.stat.name = datainfos.stat.name
      .replace('special', 'Sp.')
      .replace('-defense', ' Def')
      .replace('-attack', ' Atk');
    datainfos.stat.name =
      datainfos.stat.name.charAt(0).toUpperCase() +
      datainfos.stat.name.slice(1);
    return (
      <PokemonTC key={datainfos.stat.name}>
        <Text>{datainfos.stat.name}:</Text>
        <Text>{datainfos.base_stat}</Text>
      </PokemonTC>
    );
  };
  console.log(pokemon.pokemon.url.stats);
  return (
    <AlignCenter>
      <MainLabel>Base stats</MainLabel>
      <PokemonContainer>
        {pokemon.pokemon.url.stats.map(item => {
          return Section(item);
        })}
        {/* <FlatList
          data={pokemon.pokemon.url.stats}
          renderItem={({item}) => {}}
        /> */}
      </PokemonContainer>
    </AlignCenter>
  );
};
