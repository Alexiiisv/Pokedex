import React, {useEffect, useState} from 'react';
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
    setPokemon(await getData('pokemonInfos'));
  };
  if (isGoBack) {
    return (
      <ViewContainerReturn>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
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
            if (pokemon !== []) {
              navigation.navigate('Pokemon');
            } else {
              console.log('Pokemon non existant');
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
