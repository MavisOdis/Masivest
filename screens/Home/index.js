import React from "react";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { Button, Center, Icon, NativeBaseProvider, View } from "native-base";
import Constants from "expo-constants";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = () => {
 return(
    <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Cakes</Text>
        <ImageBackground 
            source={require('../../assets/card4.png')}
            style={{width:width, height:height/2.5,marginTop:10}}>
                <Text style={styles.mainText}>Free cake recipes for you and your family</Text>
                <Text style={styles.subText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
                </Text>
                <View style={{backgroundColor:'#fff',height:40, width:width/1.3,alignSelf:'center',borderRadius:20,top:30,justifyContent:'center'}}>
                    <TextInput style={{borderColor:'transparent',marginLeft:10}} />
                </View>
                <Icon name="search" size={20} />

        </ImageBackground>
        {/* <NativeBaseProvider>
            <Center flex={1}>
                <Button style={styles.button}>Get started {'>'}</Button>
            </Center> 
        </NativeBaseProvider> */}
    </ScrollView>
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
    mainText: {
        lineHeight:46,
        fontSize:36,
        fontFamily:'Inter-black',
        textAlign:'center',
        color:'#fff',
        top:30
    },
    subText: {
        fontSize:16,
        lineHeight:26,
        color: '#fff',
        fontFamily:'Inter-regular',
        top:25,
        textAlign:'center'
    }
})