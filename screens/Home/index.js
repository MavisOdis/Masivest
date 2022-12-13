import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Center, NativeBaseProvider, Text } from "native-base";
import Constants from "expo-constants";


const HomeScreen = () => {
 return(
    <View style={styles.container}>
        <Text style={styles.headerText}>Cakes</Text>
        <ImageBackground source={require('')}/>
        {/* <NativeBaseProvider>
            <Center flex={1}>
                <Button style={styles.button}>Get started {'>'}</Button>
            </Center> 
        </NativeBaseProvider> */}
    </View>
 );
}

export default HomeScreen; 


const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    },
    button:{
        alignItems:"center",
        flexDirection:'row',
        justifyContent:'center',
        fontFamily: 'Cinderela',
    },
    headerText: {
        fontSize:19.32,
        fontFamily: 'Cinderela',
        lineHeight:35.83,
        color: "#6E3886",
        marginLeft:15
    },

})