import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsFeed from '../../components/NewsFeed';
import Screen2 from '../../components/FeedInfo';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


export function Home() {

  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator
      initialRouteName="NewsFeed"
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="NewsFeed" component={NewsFeed} 
      options={({ route }) => ({
        headerTitle: '',
        headerStyle:{backgroundColor: '#087433'},
          headerTitle: (props) => ( 
          <Image
            style={{ width: RFValue(145), height: RFValue(36) }}
            source={require('../../../assets/logo.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center'
      })}/>
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options = {({navigation, route}) => ({
          headerTitle: '',
          headerStyle:{backgroundColor: '#087433'},
            headerTitle: (props) => ( 
            <Image
              style={{ width: RFValue(145), height: RFValue(36) }}
              source={require('../../../assets/logo.png')}
              resizeMode='contain'
            />
          ),
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerLeft: (props) => null
        })}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
}