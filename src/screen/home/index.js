import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  getAllInfosOfOnePokemon,
  GetPokemons,
  getPokemonsCount,
} from '../../components/pokemon';
import {clearAsyncStorage, getData, storeData} from '../../components/storage';
import {
  LoadingText,
  LoginContainer,
  NextPreviousButton,
  NextPreviousContainer,
  PokemonContainer,
  PokemonFlatList,
  PokemonLabel,
  PokemonThumbnail,
  TextInputLogin,
} from '../../components/styled';

const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [update, setUpdate] = useState(0);

  const getAllPokemons = async () => {
    storeData('Pokemons', JSON.stringify([]));
    await GetPokemons(
      'https://pokeapi.co/api/v2/pokemon-form/?limit=' +
        (await getPokemonsCount()),
    );
    // console.log('Pokemon apres récup:');
    // console.log(await getData('Pokemons'));
    setPokemon(await getData('Pokemons'));
    setIsLoading(false);
  };

  const Section = ({item}) => {
    return (
      <TouchableOpacity
        onPress={async () => {
          await getAllInfosOfOnePokemon(item.infos.pokemon.name);
          console.log(await getData('pokemonInfos'));
        }}
        // onPress={() => {
        //   navigation.navigate('Character', {
        //     CId: item.id,
        //   });
        // }}
      >
        <PokemonContainer>
          <PokemonLabel>{item.name}</PokemonLabel>
          <PokemonThumbnail source={{uri: item.infos.sprites.front_default}} />
        </PokemonContainer>
      </TouchableOpacity>
    );
  };

  const OnClickNextOrPrev = async Key => {
    await GetPokemons(await getData(Key));
    setUpdate(update + 1);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000);
    getAllPokemons();
  }, []);

  if (isLoading) {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradienttest}>
        {/* // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> */}
        <ActivityIndicator size="large" color={'white'} />
        <LoadingText>Loading</LoadingText>
      </LinearGradient>
    );
  }

  return (
    <LoginContainer>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        {/* <NextPreviousContainer>
          <NextPreviousButton
            title="next"
            onPress={() => {
              OnClickNextOrPrev('nextListPokemon');
            }}
          />
          <NextPreviousButton
            style={styles.nextPrev}
            title="previous"
            onPress={() => {
              OnClickNextOrPrev('previousListPokemon');
            }}
          />
        </NextPreviousContainer> */}
        <PokemonFlatList
          data={pokemon}
          renderItem={Section}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          keyExtractor={item => item.name}
        />
      </LinearGradient>
    </LoginContainer>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
  },
  linearGradienttest: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
