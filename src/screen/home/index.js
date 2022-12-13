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
    console.log(item.infos.sprites.front_default);
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
            styles={styles.Image}
            source={{uri: item.infos.sprites.front_default}}
          />
        </View>
      </TouchableOpacity>
    );
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
    <View>
      <TouchableOpacity
        style={styles.title}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Disconnect</Text>
      </TouchableOpacity>
      <View style={styles.nextPrevBtn}>
        <Button
          style={styles.nextPrev}
          title="next"
          onPress={async () => {
            const url = await getData('nextListPokemon');
            console.log(url);
            await GetNext20Pokemon(url);
            setUpdate(update + 1);
            console.log(update);
          }}
        />
        <Button
          style={styles.nextPrev}
          title="previous"
          onPress={async () => {
            console.log(await getData('previousListPokemon'));
            await GetNext20Pokemon(await getData('previousListPokemon'));
            setUpdate(update + 1);
          }}
        />
      </View>
      <FlatList
        data={pokemon}
        renderItem={Section}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  steelblue: {
    color: 'red',
    fontSize: 15,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
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
    width: 50,
    height: 50,
    backgroundColor: 'gray',
  },
  nextPrevBtn: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  nextPrev: {
    height: 40,
    width: 100,
  },
});
export default Home;
