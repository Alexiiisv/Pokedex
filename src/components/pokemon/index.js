import axios from 'axios';
import {storeData} from '../storage';

export const GetPokemons = async url => {
  if (url == null) {
    return;
  }
  try {
    const res = await axios.get(url);
    console.log('résultat du call api GetPokemons');
    console.log(res.data.results);

    const result = await Promise.all(
      res.data.results.map(async object => {
        return {...object, infos: await GetPokemonInfos(object.name)};
      }),
    );
    console.log(result);
    await storeData('Pokemons', JSON.stringify(result));
    await storeData('nextListPokemon', JSON.stringify(res.data.next));
    await storeData('previousListPokemon', JSON.stringify(res.data.previous));
    return;
  } catch (err) {
    console.error(err);
    return;
  }
};

export const GetPokemonInfos = async Id => {
  try {
    // console.log(Id);
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-form/${Id}/`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getPokemonsCount = async () => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/`);
    return res.data.count;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getAllInfosOfOnePokemon = async ID => {
  try {
    const infos = await GetPokemonInfos(ID);
    await storeData('pokemonInfos', JSON.stringify(infos));
  } catch (err) {
    console.log(err);
    return false;
  }
};
