
import { SafeAreaView } from "react-native";
import Home from "./app/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "./app/screens/About";
import Navbar from "./app/components/Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "./app/Contexts/ThemeContext";
import { useEffect, useState } from "react";

export default function App() {
   const Stack = createStackNavigator();
   const [currentMode, setCurrentMode] = useState('false')
   const currentTheme = async()=>{
    const mode = await AsyncStorage.getItem('theme');
    setCurrentMode(mode?mode:'false')
   }
   useEffect(()=>{
    currentTheme();
   }, [currentMode])
   async function themeHandler () {
    const mode = await AsyncStorage.getItem('theme')
    const newMode = mode === 'true'  ? 'false':'true';
    await AsyncStorage.setItem('theme', newMode);
    setCurrentMode(newMode)
  }

  return (
   <SafeAreaView style={{flex:1, pointerEvents:'auto'}}>
    <ThemeContext.Provider value={{themeHandler, currentMode}}>
     <NavigationContainer>
      <Navbar/>
         <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
         </Stack.Navigator>
     </NavigationContainer>
     </ThemeContext.Provider>
   </SafeAreaView>
  );

  }
