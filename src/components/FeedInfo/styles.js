import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const FeedPostContainer = styled.View`
                 
    background-color: white;
    padding: 0 5px;
`
export const FeedScroll = styled.ScrollView`
 
    

`

export const FeedPostThumb = styled.Image`
  
    width: ${RFValue(360)}px;
    height: ${RFValue(33)}px;

`

export const FeedPostTitle = styled.Text`
  
  font-family: ${({theme}) => theme.fonts.medium};
  color: black;
  align-self: center;
  text-align: center;
  width: ${RFPercentage(47)}px;
`

export const FeedPostAuthor = styled.Text`
  
  font-family: ${({theme}) => theme.fonts.medium};
  color: black;
  align-self: center;
  text-align: left;
  width: ${RFPercentage(47)}px;
  margin: 10px;

`

export const FeedPostExcerpt = styled.View`
  margin: 0 8px;
`
