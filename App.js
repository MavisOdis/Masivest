import { useCallback } from 'react';
import {  View, Text } from 'react-native';
import HomeScreen from './screens/Home';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider } from 'native-base';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cinderela': require('./assets/fonts/Cinderela.ttf'),
    'Inter-black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <View onLayout={onLayoutRootView}>
      {/* <Text style={{marginTop:50, fontFamily: 'Cinderela',color:'#6E3886'}}>This is a boy</Text> */}
        <HomeScreen/>
      </View> 
    </NativeBaseProvider>
   
  );
}

  