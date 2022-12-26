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
        <View>
          <Text styles={styles.steelblue}>{item.name}</Text>
          <Image
            source={{uri: item.infos.sprites.front_default}}
            style={styles.Image}
          />
        </View>
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
    <View style={styles.loginForm}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <TouchableOpacity
          style={styles.title}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Disconnect</Text>
        </TouchableOpacity>
        <View style={styles.nextPrevBtn}>
          <Button
            style={styles.nextPrev}
            title="next"
            onPress={() => {
              OnClickNextOrPrev('nextListPokemon');
            }}
          />
          <Button
            style={styles.nextPrev}
            title="previous"
            onPress={() => {
              OnClickNextOrPrev('previousListPokemon');
            }}
          />
        </View>
        <FlatList
          data={pokemon}
          renderItem={Section}
          numColumns={2}
          style={{marginBottom: 20}}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          keyExtractor={item => item.name}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  steelblue: {
    fontSize: 25,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
  },
  loginForm: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    height: 60,
    backgroundColor: 'yellow',
  },
  Image: {
    width: 96,
    height: 96,
    backgroundColor: 'gray',
  },
  nextPrevBtn: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 40,
    justifyContent: 'space-evenly',
  },
  nextPrev: {
    height: 40,
    width: 100,
  },
});
export default Home;
