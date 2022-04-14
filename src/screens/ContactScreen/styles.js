import { TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${RFValue(30)}px;
`

export const PageTitle = styled.Text`

  text-align: left;
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin: 1px 0px;
  color: black;
  margin-top: ${RFPercentage(1)}px;
  margin-bottom: ${RFPercentage(1)}px;
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
export const AtentionTitle = styled.Text`

  
  font-size: ${RFValue(12)}px;
  color: black;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-top: ${RFPercentage(1)}px;
`

export const PressableLink = styled.Text`

  margin: 0 15px;
  font-size: ${RFValue(12)}px;
  color: #fff;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: ${RFPercentage(1)}px;
  margin-bottom: ${RFPercentage(1)}px;
  background-color: #087433;
  border-radius: 5;
`

export const InfoContainer = styled.View`

flex-direction: row;
margin: 1px 15px 10px;
align-items: center

`
export const ClickButton = styled(TouchableOpacity)`
  background-color: black;
  width: 40%;
  margin-top: 16px
  
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

