import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const FeedPostContainer = styled.View`
 
    align-self:center;
    bottom: ${RFPercentage(2)};
`
export const FeedScroll = styled.ScrollView`
 
    

`

export const FeedPostThumb = styled.Image`
  
    width: ${RFValue(300)}px;
    height: ${RFValue(180)}px;
    border-radius: 10px;
    align-self: center;
`

export const FeedPostTitle = styled.Text`
  
  font-family: ${({theme}) => theme.fonts.medium};
  margin: 0px 35px;
  background-color: #fefefe;
  width: ${RFValue(300)};
  height: ${RFValue(95)};
  bottom: ${RFValue(10)};
  padding: 5px 4px;
`

export const HeaderView = styled.View`

  background-color: #087433;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
`

export const PageTitle = styled.Text`
  
  font-family: ${({theme}) => theme.fonts.medium};
  justify-content: center;
  align-self: center;
  font-size: ${RFValue(24)};
  margin: 20px 0 0;
  width: ${RFPercentage(50)};
  text-align: center;
`
