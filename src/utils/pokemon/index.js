import axios from 'axios';
import {getData, storeData} from '../storage';

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
        return {
          ...object,
          infos: await GetPokemonInfos(
            `https://pokeapi.co/api/v2/pokemon-form/${object.name}`,
          ),
        };
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

export const GetPokemonInfos = async URL => {
  try {
    // console.log(Id);
    const res = await axios.get(URL);
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
    // console.log(`https://pokeapi.co/api/v2/pokemon-form/${ID}/`);
    const infos = await GetPokemonInfos(
      `https://pokeapi.co/api/v2/pokemon-form/${ID}/`,
    );
    infos.pokemon.url = await GetPokemonInfos(infos.pokemon.url);
    await storeData('pokemonInfos', JSON.stringify(infos));
    // console.log(await getData('pokemonInfos'));
  } catch (err) {
    console.log(err);
    return false;
  }
};

/*
  URL a récup par pokemon

  https://pokeapi.co/api/v2/pokemon/${ID}/


 */
