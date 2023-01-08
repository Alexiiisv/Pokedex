import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: black;
`;

export const LinearGradiantComp = styled(LinearGradient)`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  padding-left: 25px;
  background-color: ${p => p.color};
  color: black;
`;

export const SearchViewInput = styled.View`
  background-color: white;
  margin-left: 8%;
  width: 70%;
  margin-top: 3%;
  border-radius: 10px;
`;
