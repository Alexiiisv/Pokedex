import styled from 'styled-components';
import {ProgressBar} from 'react-native-paper';

export const PokemonContainer = styled.View`
  width: 100%;
`;

export const AlignCenter = styled.View`
  align-items: center;
`;

export const PokemonTC = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const MainLabel = styled.Text`
  margin-top: 5px;
  font-size: 15px;
  color: white;
`;

export const Label = styled.Text`
  width: ${p => p.width};
  color: white;
  font-size: 18px;
`;

export const ProgressBarContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
`;

export const CompProgressBar = styled(ProgressBar)`
  background-color: black;
  height: 20px;
`;
