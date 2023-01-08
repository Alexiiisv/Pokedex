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

    var result = await Promise.all(
      res.data.results.map(async object => {
        const data = await GetPokemonInfos(
          `https://pokeapi.co/api/v2/pokemon-form/${object.name}`,
        );
        return {
          ...object,
          infos: data,
        };
      }),
    );
    result = await Promise.all(
      result.map(async object => {
        const data = await GetPokemonInfos(
          `https://pokeapi.co/api/v2/pokemon/${object.name}`,
        );
        // console.log(data.sprites.other);
        return {
          ...object,
          sprites: data.sprites,
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
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    await storeData('pokemonInfos', JSON.stringify([]));
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
    const infos = await GetPokemonInfos(
      `https://pokeapi.co/api/v2/pokemon-form/${ID}/`,
    );
    infos.pokemon.url = await GetPokemonInfos(infos.pokemon.url);
    infos.pokemon.url.species.url = await GetPokemonInfos(
      infos.pokemon.url.species.url,
    );
    infos.pokemon.url.species.url.evolution_chain.url = await GetPokemonInfos(
      infos.pokemon.url.species.url.evolution_chain.url,
    );
    infos.pokemon.url.species.url.evolution_chain.url.chain.species.url =
      await GetPokemonInfos(
        infos.pokemon.url.species.url.evolution_chain.url.chain.species.url,
      );
    infos.pokemon.url.species.url.evolution_chain.url.chain.species.url.varieties[0].pokemon.url =
      await GetPokemonInfos(
        infos.pokemon.url.species.url.evolution_chain.url.chain.species.url
          .varieties[0].pokemon.url,
      );

    if (
      infos.pokemon.url.species.url.evolution_chain.url.chain.evolves_to
        .length !== 0
    ) {
      infos.pokemon.url.species.url.evolution_chain.url.chain.evolves_to[0].species.url =
        await GetPokemonInfos(
          infos.pokemon.url.species.url.evolution_chain.url.chain.evolves_to[0]
            .species.url,
        );
      infos.pokemon.url.species.url.evolution_chain.url.chain.evolves_to[0].species.url.varieties[0].pokemon.url =
        await GetPokemonInfos(
          infos.pokemon.url.species.url.evolution_chain.url.chain.evolves_to[0]
            .species.url.varieties[0].pokemon.url,
        );
      if (
        infos.pokemon.url.species.url.evolution_chain.url.chain.evolves_to[0]
          .evolves_to.length !== 0
      ) {
        infos.pokemon.url.species.url.evolution_chain.url.chain.evolves_to[0].evolves_to[0].species.url =
          await GetPokemonInfos(
            infos.pokemon.url.species.url.evolution_chain.url.chain
              .evolves_to[0].evolves_to[0].species.url,
          );
        infos.pokemon.url.species.url.evolution_chain.url.chain.evolves_to[0].evolves_to[0].species.url.varieties[0].pokemon.url =
          await GetPokemonInfos(
            infos.pokemon.url.species.url.evolution_chain.url.chain
              .evolves_to[0].evolves_to[0].species.url.varieties[0].pokemon.url,
          );
      }
    }
    await storeData('pokemonInfos', JSON.stringify(infos));
  } catch (err) {
    await storeData('pokemonInfos', JSON.stringify([]));
    console.log(err);
    return false;
  }
};

/*
  URL a récup par pokemon

  https://pokeapi.co/api/v2/pokemon/${ID}/


 */
