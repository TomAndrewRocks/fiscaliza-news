import { View, Text, Pressable, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BaloonTitle, Title } from './styles';

const Brazil = { uri: 'https://i.imgur.com/0pA3lXk.png' };
const Amazonas = { uri: 'https://i.imgur.com/miqXlRV.png' };
const Politica = { uri: 'https://i.imgur.com/Qg0hcsT.png' };
const Polícia = { uri: 'https://i.imgur.com/PcJVaPx.png' };
const Mundo = { uri: 'https://i.imgur.com/kbA6hDJ.png' };
const Saúde = { uri: 'https://i.imgur.com/ycqkoeD.png' };
const Esportes = { uri: 'https://i.imgur.com/fHKzUTm.png' };
const Entretenimento = { uri: 'https://i.imgur.com/dHlYhpE.png'};

export default function SearchCategory({navigation}) {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{alignSelf: 'center'}}>
      <Pressable onPress={() => navigation.navigate('SearchFeed')}>
          <View
          style={{display: 'flex', flexDirection: 'row', marginTop: 10, alignSelf: 'center'}}>
          <View
           placeholder='Busque aqui..'
           style={[styles.textInputStyle, {width: RFPercentage(33), 
            backgroundColor: '#FFFFFF',}]}>
               <Text
               style={{marginLeft: RFValue(2), paddingTop: RFValue(7), color: '#A4A3A3'}}>
                Pesquisar no Fiscaliza
               </Text>
           </View>
           <View
           placeholder='Busque aqui..'
           style={[styles.textInputStyle, {width: RFPercentage(12), 
            backgroundColor: '#059639',}]}>
               <Text
               style={{paddingLeft: RFValue(2), paddingTop: RFValue(7), color: 'white'}}>
                BUSCAR
               </Text>
           </View>
           </View>
      </Pressable>
      <View>
        <Title>Explorar Tópicos</Title>
        <View style={{marginLeft: -9}}>
              <View style={{marginVertical: RFValue(6), marginHorizontal: RFValue(7), display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity
              onPress={() => navigation.navigate('BrasilFeed')}>
              <ImageBackground source={Amazonas} resizeMode="cover" 
              style={{width: RFPercentage(25), height: RFPercentage(18), marginHorizontal: 10}}>
               <BaloonTitle style={{color: 'white', alignSelf: 'center', paddingTop: RFPercentage(8.2)}}>Amazonas</BaloonTitle>
              </ImageBackground></TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('PolitcsFeed')}>
              <ImageBackground source={Politica} resizeMode="cover" 
              style={{width: RFPercentage(25), height: RFPercentage(18)}}>
               <BaloonTitle style={{color: 'white', alignSelf: 'center', paddingTop: RFPercentage(8.2)}}>Política</BaloonTitle>
              </ImageBackground></TouchableOpacity>
              </View>
              <View style={{marginVertical: RFValue(6), marginHorizontal: RFValue(7), display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity
              onPress={() => navigation.navigate('PoliciaFeed')}>
              <ImageBackground source={Polícia} resizeMode="cover" 
              style={{width: RFPercentage(25), height: RFPercentage(18), marginHorizontal: 10}}>
               <BaloonTitle style={{color: 'white', alignSelf: 'center', paddingTop: RFPercentage(8.2)}}>Polícia</BaloonTitle>
              </ImageBackground></TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('BrasilFeed')}>
              <ImageBackground source={Brazil} resizeMode="cover" 
              style={{width: RFPercentage(25), height: RFPercentage(18)}}>
               <BaloonTitle style={{color: 'white', alignSelf: 'center', paddingTop: RFPercentage(8.2)}}>Nacional</BaloonTitle>
              </ImageBackground></TouchableOpacity>
              </View>
              <View style={{marginVertical: RFValue(6), marginHorizontal: RFValue(7), display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity
              onPress={() => navigation.navigate('MundoFeed')}>
              <ImageBackground source={Mundo} resizeMode="cover" 
              style={{width: RFPercentage(25), height: RFPercentage(18), marginHorizontal: 10}}>
               <BaloonTitle style={{color: 'white', alignSelf: 'center', paddingTop: RFPercentage(8.2)}}>Mundo</BaloonTitle>
              </ImageBackground></TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('EntretenimentoFeed')}>
              <ImageBackground source={Entretenimento} resizeMode="cover" 
              style={{width: RFPercentage(25), height: RFPercentage(18)}}>
               <BaloonTitle style={{color: 'white', alignSelf: 'center', paddingTop: RFPercentage(8.2)}}>Entretenimento</BaloonTitle>
              </ImageBackground></TouchableOpacity>
              </View>
              <View style={{marginVertical: RFValue(6), marginHorizontal: RFValue(7), display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity
              onPress={() => navigation.navigate('EsportesFeed')}>
              <ImageBackground source={Esportes} resizeMode="cover" 
              style={{width: RFPercentage(25), height: RFPercentage(18), marginHorizontal: 10}}>
               <BaloonTitle style={{color: 'white', alignSelf: 'center', paddingTop: RFPercentage(8.2)}}>Esportes</BaloonTitle>
              </ImageBackground></TouchableOpacity>
              </View>
              </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    textInputStyle: {
      height: RFValue(35),
      alignSelf: 'center',
      borderWidth: 0.4,
      paddingLeft: RFValue(10),
      marginTop: 20,
      borderColor: '#ccc',
    },
  });
  