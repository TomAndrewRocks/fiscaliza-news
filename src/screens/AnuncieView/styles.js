import { TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${RFValue(30)}px;
`

export const PageTitleOne = styled.Text`
  
  text-align: left;
  font-size: ${RFValue(13)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  margin-top: ${RFPercentage(1)}px;
`
export const PageTitleTwo = styled.Text`

  text-align: left;
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  margin: 1px 0px;
  margin-top: ${RFPercentage(1)}px;
`

export const InfoText = styled.Text`
  margin: 0px 10px;
  font-size: ${RFValue(12)}px;
  color: black;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: ${RFPercentage(1)}px;
  
`
export const Wrapper = styled.View`

  flex: 1;
  padding: 10px 20px 0 10px;
  background-color: white;
  margin: 0 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`


export const InfoContainer = styled.View`

flex-direction: row;
margin: 14px 0px;
align-items: center

`
export const ClickButton = styled(TouchableOpacity)`
  background-color: black;
  max-width: ${RFPercentage(22)};
  margin-top: 16px;
  
`

export const ButtonText = styled.Text`

 color: white;
 align-self: center;
 padding: ${RFValue(10)}px;
 font-size: ${RFValue(18)}px;
 font-family: ${({theme}) => theme.fonts.medium};
 text-align: center;
`

export const Icon = styled(Ionicons)`

  color: #087433;
  font-size: ${RFValue(32)}px;
`

