import axios from 'axios';
import {storeData} from '../storage';

export const GetNext20Pokemon = async url => {
  if (url == null) {
    return;
  }
  try {
    const res = await axios.get(url);
    console.log(res.data.results);

    const result = await Promise.all(
      res.data.results.map(async object => {
        return {...object, infos: await GetPokemonInfos(object.name)};
      }),
    );

    console.log(typeof result);
    console.log(result);
    await storeData('Pokemons', JSON.stringify(result));
    await storeData('nextListPokemon', JSON.stringify(res.data.next));
    await storeData('previousListPokemon', JSON.stringify(res.data.previous));
    return;
  } catch (err) {
    // Handle Error Here
    console.error(err);
    return;
  }
};

export const GetPokemonInfos = async Id => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-form/${Id}/`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
