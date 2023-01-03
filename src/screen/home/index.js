import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {LoginContainer, PokemonFlatList} from '../../components/styled';
import {getData, storeData} from '../../utils/storage';
import {GetPokemons} from '../../utils/pokemon';
import {Loading} from '../../components/loading';
import PokemonFL from '../../components/pokemonFlatList';

const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  const getAllPokemons = async () => {
    storeData('Pokemons', JSON.stringify([]));
    await GetPokemons(
      'https://pokeapi.co/api/v2/pokemon-form/?limit=151',
      // 'https://pokeapi.co/api/v2/pokemon-form/?limit=' +
      //   (await getPokemonsCount()),
    );
    setPokemon(await getData('Pokemons'));
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <LoginContainer>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <ScrollView
          contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.map(item => {
            return PokemonFL({item, navigation});
          })}
        </ScrollView>
      </LinearGradient>
    </LoginContainer>
  );
};

//  Styled components ne fonctionne pas avec ce composant
//
// const LinearGradiantComp = styled(LinearGradient)`
//   flex: 1;
//   padding-left: '15px';
//   padding-right: '15px';
//   justify-content: center;
// `;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
  },
});

export default Home;
