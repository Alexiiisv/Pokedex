import React, {useState} from 'react';
import {MyBackButton} from '../returnBack';
import {HeightView, SearchInput, SearchViewInput} from './style';
const SearchBar = ({warning, navigation}) => {
  const [pokemonName, setPokemonName] = useState('');
  return (
    <HeightView>
      <SearchViewInput>
        <SearchInput
          onChangeText={text => setPokemonName(text)}
          value={pokemonName}
          placeholder="Pokemon name"
        />
      </SearchViewInput>

      <MyBackButton
        name={pokemonName}
        navigation={navigation}
        isGoBack={false}
      />
    </HeightView>
  );
};
export default SearchBar;
