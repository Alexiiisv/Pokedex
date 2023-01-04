import React from 'react';
import {Image} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {PokemonImage} from './style';

export const ImagePoke = sprites => {
  console.log(sprites.sprites);
  if (sprites.sprites.other.dream_world.front_default !== null) {
    return (
      <SvgUri
        width="100px"
        height="100px"
        uri={sprites.sprites.other.dream_world.front_default}
      />
    );
  } else {
    return (
      <PokemonImage
        source={{
          uri: sprites.sprites.other['official-artwork'].front_default,
        }}
      />
    );
  }
};
