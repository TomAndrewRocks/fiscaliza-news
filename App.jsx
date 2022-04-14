import React from "react";
import AppLoading from 'expo-app-loading';
import { useFonts, Rubik_300Light, Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold, Rubik_800ExtraBold, 
  Rubik_900Black } from '@expo-google-fonts/rubik';
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import themes from "./src/styles/themes";
import Routes from "./src/routes";

export default function App() {

  let [fontsLoaded] = useFonts({Rubik_300Light,Rubik_400Regular,Rubik_500Medium,Rubik_600SemiBold, Rubik_700Bold,Rubik_800ExtraBold,Rubik_900Black });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
  return (
   <ThemeProvider theme={themes}>
      <StatusBar auto/>
       <Routes/>
    </ThemeProvider>
  );
 }
}