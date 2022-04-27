import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Title = styled.Text`

  font-size: 20px;
  color: black;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-left: ${RFValue(10)};
  margin-top: 20;
  margin-bottom: 10;
`

export const BaloonTitle = styled.Text`
  
  font-family: ${({theme}) => theme.fonts.medium};
  margin: 0px 35px;
  height: ${RFValue(95)};
  font-size: ${RFValue(12)}px;
`