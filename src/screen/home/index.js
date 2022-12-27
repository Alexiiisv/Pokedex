import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GetNext20Pokemon} from '../../components/pokemon';
import {getData} from '../../components/storage';
import {
  LoginContainer,
  NextPreviousButton,
  NextPreviousContainer,
  PokemonContainer,
  PokemonFlatList,
  PokemonLabel,
  PokemonThumbnail,
} from '../../components/styled';

const Home = ({navigation}) => {
  const [IsLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [update, setUpdate] = useState(0);
  const getPokemon = async () => {
    const pokeTemp = await getData('Pokemons');
    console.log(pokeTemp);
    setPokemon(pokeTemp);
  };

  useEffect(() => {
    getPokemon();
  }, [update]);

  const Section = ({item}) => {
    return (
      <TouchableOpacity
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
    await GetNext20Pokemon(await getData(Key));
    setUpdate(update + 1);
  };

  if (IsLoading) {
    return (
      <View>
        <Button
          title="Disconnect"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Get Pokemon"
          onPress={async () => {
            await GetNext20Pokemon('https://pokeapi.co/api/v2/pokemon-form/');
            setIsLoading(false);
          }}
        />
      </View>
    );
  }

  return (
    <LoginContainer>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <NextPreviousContainer>
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
        </NextPreviousContainer>
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
});
export default Home;
