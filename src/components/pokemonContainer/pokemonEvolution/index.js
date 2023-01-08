import React from 'react';
import {Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {PokemonEvolutionView} from '../pokemonEvolutionView';
import {
  EvolveLabel,
  NoEvolveLabel,
  PokemonEvolutionContainer,
  RowView,
} from './style';

export const PokemonEvolution = ({pokemon}) => {
  var result = (
    <View>
      <NoEvolveLabel>Aucune évolution existante</NoEvolveLabel>
    </View>
  );
  if (pokemon.evolves_to.length !== 0) {
    result = (
      <PokemonEvolutionContainer>
        <PokemonEvolutionView
          text={pokemon.species.name}
          sprites={pokemon.species.url.varieties[0].pokemon.url.sprites}
        />
        <RowView>
          <EvolveLabel>Evolve into</EvolveLabel>
          <SvgUri
            width="75px"
            height="50px"
            uri={'https://www.svgrepo.com/show/28675/right-arrow.svg'}
          />
        </RowView>
        <PokemonEvolutionView
          text={pokemon.evolves_to[0].species.name}
          sprites={
            pokemon.evolves_to[0].species.url.varieties[0].pokemon.url.sprites
          }
        />
      </PokemonEvolutionContainer>
    );
    if (pokemon.evolves_to[0].evolves_to.length !== 0) {
      result = (
        <View>
          <PokemonEvolutionContainer>
            <PokemonEvolutionView
              text={pokemon.species.name}
              sprites={pokemon.species.url.varieties[0].pokemon.url.sprites}
            />
            <RowView>
              <EvolveLabel>Evolve into</EvolveLabel>
              <SvgUri
                width="75px"
                height="50px"
                uri={'https://www.svgrepo.com/show/28675/right-arrow.svg'}
              />
            </RowView>
            <PokemonEvolutionView
              text={pokemon.evolves_to[0].species.name}
              sprites={
                pokemon.evolves_to[0].species.url.varieties[0].pokemon.url
                  .sprites
              }
            />
          </PokemonEvolutionContainer>
          <PokemonEvolutionContainer>
            <PokemonEvolutionView
              text={pokemon.evolves_to[0].species.name}
              sprites={
                pokemon.evolves_to[0].species.url.varieties[0].pokemon.url
                  .sprites
              }
            />
            <RowView>
              <EvolveLabel>Evolve into</EvolveLabel>
              <SvgUri
                width="75px"
                height="50px"
                uri={'https://www.svgrepo.com/show/28675/right-arrow.svg'}
              />
            </RowView>
            <PokemonEvolutionView
              text={pokemon.evolves_to[0].evolves_to[0].species.name}
              sprites={
                pokemon.evolves_to[0].evolves_to[0].species.url.varieties[0]
                  .pokemon.url.sprites
              }
            />
          </PokemonEvolutionContainer>
        </View>
      );
    }
  }
  return result;
};
