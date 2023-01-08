import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {PokemonEvolutionContainer} from '../PokemonEvolutionContainer';
import {PokemonStatsContainer} from '../pokemonStatsContainer';
import {TypeContainer} from '../pokemonTypeContainer';

export const PokemonSwitchView = ({pokemon}) => {
  const [whatToShow, setWhatToShow] = useState('');
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          onPress={() => {
            setWhatToShow('Stats');
          }}
          title={'Stats'}
        />
        <Button
          onPress={() => {
            setWhatToShow('Evolution');
          }}
          title={'Evolution'}
        />
      </View>
      {whatToShow === 'Stats' ? (
        <PokemonStatsContainer pokemon={pokemon} />
      ) : whatToShow === 'Evolution' ? (
        <PokemonEvolutionContainer
          pokemon={pokemon.pokemon.url.species.url.evolution_chain.url.chain}
        />
      ) : null}
    </View>
  );
};
