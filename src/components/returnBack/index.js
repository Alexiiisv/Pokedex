import React, {useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {SvgUri} from 'react-native-svg';
import {getAllInfosOfOnePokemon} from '../../utils/pokemon';
import {getData} from '../../utils/storage';
import {
  TouchableOpacity,
  ViewContainerReturn,
  ViewContainerSearch,
} from './style';

export const MyBackButton = ({navigation, isGoBack, name}) => {
  const [pokemon, setPokemon] = useState([]);
  const test = async () => {
    await getAllInfosOfOnePokemon(name);
    await getAllInfosOfOnePokemon(name);
    setPokemon(await getData('pokemonInfos'));
  };
  if (isGoBack) {
    return (
      <ViewContainerReturn>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            setPokemon([]);
          }}>
          <SvgUri
            width="100%"
            height="100%"
            uri={
              'https://www.svgrepo.com/show/326475/arrow-back-circle-outline.svg'
            }
          />
        </TouchableOpacity>
      </ViewContainerReturn>
    );
  } else {
    return (
      <ViewContainerSearch>
        <TouchableOpacity
          onPress={async () => {
            if (name === '') {
              return;
            }
            await test();
            console.log(Object.keys(pokemon).length);
            if (pokemon && Object.keys(pokemon).length !== 0) {
              setPokemon([]);
              navigation.navigate('Pokemon');
            } else {
              console.log('Pokemon non existant');
              showMessage({
                message: "Ce pokemon n'existe pas",
                type: 'info',
              });
            }
          }}>
          <SvgUri
            width="100%"
            height="100%"
            uri={'https://www.svgrepo.com/show/448290/arrow-right-circle.svg'}
          />
        </TouchableOpacity>
      </ViewContainerSearch>
    );
  }
};
