import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from '../screens/OnBoarding';
import { TabRoutes } from './tab.routes';

const {Navigator, Screen} = createNativeStackNavigator();

export default function StackRoutes() {

  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
    
  }, []);

  return (
    isAppFirstLaunched != null && (
    <NavigationContainer
    independent={true}>
        <Navigator
        initialRouteName="OnBoarding">
          {isAppFirstLaunched && (
           <Screen name="OnBoarding" component={OnBoarding} options={{
              headerShown: false
            }}/>
            )}
            <Screen name="TabRoutes" component={TabRoutes} options={{
              headerShown: false
            }}/>
        </Navigator>
    </NavigationContainer>
    )
  )
}