import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getData, storeData} from '../../utils/storage';
import {GetPokemons, getPokemonsCount} from '../../utils/pokemon';
import {Loading} from '../../components/loading';
import {PokemonFL} from '../../components/pokemonContainer/pokemonFlatList';
import {HomeContainer, LinearGradiantComp} from './style';
import SearchBar from '../../components/searchBar';

const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const getAllPokemons = async () => {
    storeData('Pokemons', JSON.stringify([]));
    await GetPokemons(
      'https://pokeapi.co/api/v2/pokemon-form/?limit=50',
      // 'https://pokeapi.co/api/v2/pokemon-form/?limit=' +
      //   (await getPokemonsCount()),
    );
    setPokemon(await getData('Pokemons'));
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HomeContainer>
      <LinearGradiantComp
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          {pokemon.map(item => {
            return (
              <PokemonFL
                navigation={navigation}
                name={item.name}
                sprites={item.sprites}
              />
            );
          })}
        </ScrollView>
        <SearchBar navigation={navigation} />
      </LinearGradiantComp>
    </HomeContainer>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {flexDirection: 'row', flexWrap: 'wrap'},
});

export default Home;
