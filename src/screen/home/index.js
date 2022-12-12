import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Home = ({navigation}) => {
  const [Character, setCharacter] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const styles = StyleSheet.create({
    steelblue: {
      color: 'red',
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
  });
  const getCharacter = () => {
    axios
      .get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          apikey: '7dc0c20f5ea5f522c1947444bf73e61c',
          ts: 1,
          hash: '7b00a9d14b3952d39241bdf6d2392387',
        },
      })
      .then(function (response) {
        setCharacter(response.data.data.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    return;
  };

  const Section = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Character', {
            CId: item.id,
          });
        }}>
        <View>
          <Text styles={styles.steelblue}>{item.name}</Text>
          <Image
            style={styles.Image}
            source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  if (IsLoading) {
    return (
      <View>
        <Button
          title="disconnect"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Get character"
          onPress={() => {
            getCharacter();
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
        <Text style={styles.buttonText}>My button</Text>
      </TouchableOpacity>
      <Button
        styles={styles.title}
        title="disconnect"
        onPress={() => navigation.navigate('Login')}
      />
      <FlatList
        data={Character}
        renderItem={Section}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
