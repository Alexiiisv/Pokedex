import styled from 'styled-components';

export const TextInputLogin = styled.TextInput`
  background-color: white;
  font-family: 'Gill Sans';
  color: 'black';
  width: 35%;
  margin-bottom: 10px;
`;

export const LoginFormContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
`;

export const EnterApp = styled.Text`
  font-size: 25px;
  font-family: 'Gill Sans';
  text-align: center;
  color: white;
  margin: 10px;
  background-color: gray;
  border-color: black;
  border-width: 1px;
  height: 40px;
`;

export const LoginLabel = styled.Text`
  background-color: white;
  font-family: 'Gill Sans';
  text-align: center;
  color: black;
  width: 35%;
  margin-bottom: 10px;
`;

export const LoginLabelContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const LoginContainer = styled.View`
  flex: 1;
  background-color: black;
`;

export const LoginButton = styled.TouchableHighlight`
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 10px;
  padding-top: 10%;
`;

export const PokemonThumbnail = styled.Image`
  width: 96px;
  height: 96px;
  background-color: white;
  border-radius: 40px;
`;

export const PokemonContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const PokemonLabel = styled.Text`
  font-size: 15px;
  font-family: 'Gill Sans';
  text-align: center;
  color: #ffffff;
  margin: 10px;
`;

export const NextPreviousButton = styled.Button`
  height: 40px;
  width: 100px;
`;

export const NextPreviousContainer = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 40px;
  margin-top: 20px;
  justify-content: space-evenly;
`;

export const PokemonFlatList = styled.FlatList`
  margin-bottom: 20px;
`;
