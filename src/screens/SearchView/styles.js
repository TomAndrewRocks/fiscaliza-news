import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const FeedPostContainer = styled.View`
 
    align-self:center;
    display: flex;
    flex-direction: row;
    margin-left: ${RFValue(80)};
    margin-right: ${RFValue(80)}

`

export const FeedPostThumb = styled.Image`
  
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
    border-radius:100;
    align-self: center;
    align-items:center;
    justify-content:center;
    display:flex;
`

export const FeedPostTitle = styled.Text`
  
  font-family: ${({theme}) => theme.fonts.medium};
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: ${RFValue(12)}px;
  margin: 0 10px
`

export const FeedPostExcerpt = styled.Text`
  
  font-family: ${({theme}) => theme.fonts.medium};
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: ${RFValue(12)};
`

export const HeaderView = styled.View`

  background-color: green;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  height: ${RFPercentage(14)};
`
