import React from 'react';
import { Image, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'



const Footer = () => {
    return (
        <View style={{backgroundColor:"#F2F2F2",bottom:100}}>
            <Image source={require("../../assets/foot.png")} style={{width:109.93,height:140,alignSelf:"flex-end"}} />
            <View style={{marginHorizontal:32}}>
            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:28,fontFamily:"Cinderela"}}>Cakes</Text>
                <View style={{flexDirection:"row",top:3}}>
                    <Text style={{fontSize:12,fontFamily:'Inter-regular',color:'#4F4F4F',lineHeight:24}}>Back to top</Text>
                    <Entypo name="chevron-small-up" size={20} color="#4F4F4F" style={{top:2}} />
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text>HEALTHY</Text>
                <Text>RESOURCES</Text>
            </View>
            <View style={{justifyContent:"space-between", flexDirection:'row'}}>
                <Text>Vegan {'\n'} Lactose Free {'\n'} Sugar Free {'\n'} Glutten Free</Text>
                <Text>Tips {'\n'} Tutotials {'\n'} Courses {'\n'} E-Books</Text>
            </View>

        </View>
        </View>
    );
}

export default Footer;