import React from 'react'
import { Image, SafeAreaView } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { HeaderView } from './styles'

export default function HeaderImage() {
  return (
    <SafeAreaView>
    <HeaderView>
      <Image source={require('../../../assets/logo.png')} style={{width: RFValue(150), height: RFValue(32), top: 5}}/>
    </HeaderView>
    </SafeAreaView>
  )
}