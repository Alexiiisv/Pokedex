import React from 'react';
import {SvgUri} from 'react-native-svg';
import {PokemonImage} from './style';

export const ImagePoke = ({sprites}) => {
  // console.log(sprites);
  if (sprites.other.dream_world.front_default !== null) {
    return (
      <SvgUri
        width="100px"
        height="100px"
        uri={sprites.other.dream_world.front_default}
      />
    );
  } else {
    return (
      <PokemonImage
        source={{
          uri: sprites.other['official-artwork'].front_default,
        }}
      />
    );
  }
};
