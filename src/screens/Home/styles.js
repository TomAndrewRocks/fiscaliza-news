import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const FeedPostContainer = styled.View`
  
    margin: 10px 20px;
    padding: 25px 15px;
    border: 1px;
    border-radius: 15px;
    border-color: #ddd;
    align-self:center;

`
export const FeedPostThumb = styled.ImageBackground`
  
    width: ${RFValue(350)}px;
    height: ${RFValue(233)}px

`

export const FeedPostTitle = styled.View`
  
 
`


export const FeedPostExcerpt = styled.View`
  
 
`
