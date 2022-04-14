import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const FeedPostContainer = styled.View`
 
    align-self:center;
    display: flex;
    flex-direction: row;
    margin-left: ${RFValue(25)};
`
export const FeedPostTitle = styled.Text`
  
  font-family: ${({theme}) => theme.fonts.medium};
  display: flex;
  font-size: ${RFValue(12)};
  align-self: center;
  text-align: left;
  width: ${RFPercentage(38)};
  margin-left: ${RFValue(8)};
  margin-right: ${RFValue(22)};
`

export const HeaderView = styled.View`

  background-color: green;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  height: ${RFPercentage(14)};
`
