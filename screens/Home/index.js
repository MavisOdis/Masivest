import React, {useState} from "react";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { Button, Center, Icon, Input, NativeBaseProvider, Stack, View, ZStack } from "native-base";
import Constants from "expo-constants";
import { Octicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = () => {
    const [ search, setSearch] = useState("");
 return(
    <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Cakes</Text>
        {/* Header image with search bar */}
        <ImageBackground 
            source={require('../../assets/card4.png')}
            style={{width:width, height:height/2.5,marginTop:10}}>
                <Text style={styles.mainText}>Free cake recipes for you and your family</Text>
                <Text style={styles.subText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
                </Text>
                <View style={styles.searchbarView}>
                    <Input 
                        style={{fontSize:12, paddingLeft:-20}} 
                        variant="unstyled" 
                        InputLeftElement={<Icon as={<Octicons name="search" 
                            onPress={(text) => setSearch(text) } 
                        />} 
                        size="md" m={2} 
                        _light={{color:"black"}} 
                        _dark={{color:"gray.300"}}/>}
                        placeholder="Search..." 
                        _light={{placeholderTextColor: "blueGray.400"}}
                        _dark={{placeholderTextColor: "blueGray.50"}}
                    />
                </View>
                <Icon name="search" size={20} />
        </ImageBackground>
        <Stack 
            style={{marginTop:16, justifyContent:'space-evenly'}}
            direction={{base: "row"}}  
            space={2} 
            alignItems={{base: "center"}}
        >
            <Button variant={"outline"}>
                Vegan
            </Button>
            <Button variant={"outline"}>
                Lactose Free
            </Button>
            <Button variant={"outline"}>
                Sugar Free
            </Button>
        </Stack>
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
        fontSize:30,
        fontFamily:'Inter-black',
        textAlign:'center',
        color:'#fff',
        top:30
    },
    subText: {
        fontSize:12,
        lineHeight:26,
        color: '#fff',
        fontFamily:'Inter-regular',
        top:35,
        textAlign:'center'
    },
    searchbarView: {
        backgroundColor:'#fff',
        height:40, 
        width:width/1.3,
        alignSelf:'center',
        borderRadius:20,
        top:50,
        justifyContent:'center'
    }
})