import React from 'react';
import {
  AlignCenter,
  CompProgressBar,
  Label,
  MainLabel,
  PokemonContainer,
  PokemonTC,
  ProgressBarContainer,
} from './style';
import {MD3Colors} from 'react-native-paper';

export const PokemonStatsContainer = ({pokemon}) => {
  const Section = datainfos => {
    console.log(datainfos);
    datainfos.stat.name = datainfos.stat.name
      .replace('special', 'Sp.')
      .replace('-defense', ' Def')
      .replace('-attack', ' Atk');
    datainfos.stat.name =
      datainfos.stat.name.charAt(0).toUpperCase() +
      datainfos.stat.name.slice(1);
    // datainfos.base_stat = Math.round(Math.random() * 255); //si on veux des valeurs random pour les stats de base du pokemon
    var progressBarValue = (datainfos.base_stat * 1) / 255;
    return (
      <PokemonTC key={datainfos.stat.name}>
        <Label width={'22%'}>{datainfos.stat.name}: </Label>
        <Label width={'12%'}>{datainfos.base_stat} </Label>
        <ProgressBarContainer>
          <CompProgressBar
            progress={progressBarValue}
            visible={true}
            color={MD3Colors.error50}
          />
        </ProgressBarContainer>
      </PokemonTC>
    );
  };
  return (
    <AlignCenter>
      <MainLabel>Base stats</MainLabel>
      <PokemonContainer>
        {pokemon.pokemon.url.stats.map(item => {
          return Section(item);
        })}
      </PokemonContainer>
    </AlignCenter>
  );
};
