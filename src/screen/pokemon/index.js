import React, {useEffect, useState} from 'react';
import {getData} from '../../utils/storage';
import {Loading} from '../../components/loading';
import {PokemonMainPage} from '../../components/pokemonContainer/pokemon';
import {LinearGradiantComp, LoginContainer, LoginFormContainer} from './style';

const Pokemon = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokeUpdate, setpokeUpdate] = useState(false);
  const getInfos = async () => {
    setPokemon(await getData('pokemonInfos'));
  };
  useEffect(() => {
    getInfos();
  }, []);

  useEffect(() => {
    if (pokeUpdate) {
      setIsLoading(false);
      console.log('data pokemon: ');
      console.log(pokemon);
      if (pokemon.length === 0) {
        navigation.navigate('Home');
      }
    } else {
      setpokeUpdate(true);
    }
  }, [pokemon]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <LoginContainer>
      <LoginFormContainer>
        <LinearGradiantComp colors={['#4c669f', '#3b5998', '#192f6a']}>
          <PokemonMainPage pokemon={pokemon} navigation={navigation} />
        </LinearGradiantComp>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Pokemon;
