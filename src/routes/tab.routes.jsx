import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Home } from "../screens/Home";
import { Search } from "../screens/SearchView"
import { Anuncie } from "../screens/AnuncieView";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Contact from "../screens/ContactScreen";

const Tab = createBottomTabNavigator()

export function TabRoutes() {
    return (
        <Tab.Navigator 
        initialRouteName="Início"
        screenOptions ={{
            tabBarStyle: {
                backgroundColor: '#232D35',
                height: 50,
                paddingBottom: 3
            },
            tabBarActiveTintColor: '#FBC00C', 
            tabBarInactiveTintColor: '#999',
            tabBarShowLabel: true,
           
        }}>
            <Tab.Screen
            name="Início"
            component={Home}
            options={{
                tabBarIcon: ({size, color, focused}) => (
                    <Ionicons name={focused ? "home" : "home-outline"} size={RFValue(20)} color={color}/>
                ),
                headerTitle: '',
                headerShown: false
                
            }}
            />
            <Tab.Screen
            name="Buscar"
            component={Search}
            options={{
                tabBarIcon: ({size, color, focused}) => (
                    <Ionicons name={focused ? "search" : "search-outline"} size={RFValue(20)} color={color}/>
                ),
                headerTitle: '',
                headerShown: false
            }}
            />
             <Tab.Screen
            name="Anuncie"
            component={Anuncie}
            options={{
                tabBarIcon: ({size, color, focused}) => (
                    <Ionicons name={focused ? "megaphone" : "megaphone-outline"} size={RFValue(20)} color={color}/>
                ),
                headerTitle: '',
                headerStyle:{backgroundColor: '#087433'},
                headerTitle: (props) => ( 
                <Image
                 style={{ width: RFValue(145), height: RFValue(36) }}
                source={require('../../assets/logo.png')}
                resizeMode='contain'
                />
               ),
               headerTitleAlign: 'center'
            }}
            />
            <Tab.Screen
            name="Sobre"
            component={Contact}
            options={{
                tabBarIcon: ({size, color, focused}) => (
                    <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={RFValue(20)} color={color}/>
                ),
                headerTitle: '',
                headerStyle:{backgroundColor: '#087433'},
                headerTitle: (props) => ( 
                <Image
                 style={{ width: RFValue(145), height: RFValue(36) }}
                source={require('../../assets/logo.png')}
                resizeMode='contain'
                />
               ),
               headerTitleAlign: 'center'
            }}
            />
        </Tab.Navigator>
    )
}