import { Icon, Input } from "native-base";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Footer from "../Footer/footer";
import { LinearGradient } from 'expo-linear-gradient';


const NewsLetter = () => {
  return (
    <>
      <View style={{flexDirection:"row",justifyContent:'space-around'}}>
        <AntDesign name="arrowleft" size={15} color="#4F4F4F" />
        <Text style={styles.pageIndicator}>Page 1 of 10</Text>
        <AntDesign name="arrowright" size={15} color="#4F4F4F" />
      </View>
      <Card style={styles.newsLetterCard}>
        <Text style={styles.newsletter}>Newsletter</Text>
        <Text style={styles.description}>
          Get updates on your favourite recipes, books and latest features
        </Text>
        <View style={styles.emailView}>
          <Input
            style={{ fontSize: 12, paddingLeft: -20 }}
            variant="unstyled"
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email-outline" />}
                size="md"
                m={2}
                _light={{ color: "#BDBDBD" }}
                _dark={{ color: "gray.300" }}
              />
            }
            placeholder="Enter your email"
            _light={{ placeholderTextColor: "blueGray.400" }}
            _dark={{ placeholderTextColor: "blueGray.50" }}
          />
        </View>

        <LinearGradient colors={['#6E3886','#EDBD03']} 
          start={{x: 0.21, y: 0}}
          end={{x: 1, y: 1}} style={styles.subscribe}>
          <TouchableOpacity >
            <Text style={styles.subText}>Subscribe</Text>
          </TouchableOpacity>
        </LinearGradient>
        
      </Card>
      {/* footer */}
      <Footer/>
    </>
  );
};

export default NewsLetter;

const styles = StyleSheet.create({
    emailView: {
        height: 40,
        justifyContent: "center",
        backgroundColor: "#F2F2F2",
        marginBottom:16,
        borderRadius:10,
    },
    newsletter: {
        alignSelf: "center",
        fontSize:16,
        lineHeight:19.16,
        fontFamily: "Inter-bold",
        color: "#1E0828"
    },
    description: {
        textAlign: "center",
        fontSize:14,
        lineHeight:21,
        fontFamily: "Inter-regular",
        color: "#828282",
        marginBottom:16
    },
    subscribe: {
        backgroundColor: "#6E3886",
        alignItems:"center",
        height:40,
        justifyContent:"center",
        borderRadius:10
    },
    subText: {
        color:'#fff',
        fontSize:16,
        lineHeight:19.36,
        fontFamily: "Inter-regular"
    },
    newsLetterCard: {
      alignItems:'center',
      margin:15,
      padding:24, 
      backgroundColor:"#fff",
      zIndex:3
    },
    pageIndicator: {
      color:'#828282',
      fontFamily: "Inter-regular",
      fontSize:14,
      lineHeight:20
    },
})
