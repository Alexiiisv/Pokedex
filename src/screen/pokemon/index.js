import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useState} from 'react';
import {LoginContainer, LoginFormContainer} from '../../components/styled';
import {getData} from '../../utils/storage';
import {Loading} from '../../components/loading';
import {PokemonMainPage} from '../../components/pokemonContainer/pokemon';

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
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <PokemonMainPage pokemon={pokemon} navigation={navigation} />
        </LinearGradient>
      </LoginFormContainer>
    </LoginContainer>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    justifyContent: 'center',
  },
});

export default Pokemon;
