import { Icon } from "native-base";
import React from "react";
import { Dimensions, StyleSheet, Image, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CardView = () => {
  return (
    <>
      {[
        {
          type: "Itallian",
          title: "Cassata Ricotta",
          time: "15 minutes",
          spice: "Sponge Cake with Ricotta",
          image: (
            <Image
              source={require("../../assets/card1.png")}
            />
          ),
        },
        {
            type: "Itallian",
            title: "Cassata Ricotta",
            time: "15 minutes",
            spice: "Sponge Cake with Ricotta",
            image: (
              <Image
                source={require("../../assets/card2.png")}
              />
            ),
          },
          {
            type: "Itallian",
            title: "Cassata Ricotta",
            time: "15 minutes",
            spice: "Sponge Cake with Ricotta",
            image: (
              <Image
                source={require("../../assets/card3.png")}
              />
            ),
          },
          {
            type: "Itallian",
            title: "Cassata Ricotta",
            time: "15 minutes",
            spice: "Sponge Cake with Ricotta",
            image: (
              <Image
                source={require("../../assets/card4.png")}
              />
            ),
          },
          {
            type: "Itallian",
            title: "Cassata Ricotta",
            time: "15 minutes",
            spice: "Sponge Cake with Ricotta",
            image: (
              <Image
                source={require("../../assets/card5.png")}
              />
            ),
          },
      ].map((item, index) => (
        <Card
          key={index}
          style={{
            margin: 15,
            paddingHorizontal:20,
            paddingVertical:20
          }}
        >
          {item.image}
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.spice}>{item.spice}</Text>
          <View style={styles.timeView}>
            <Icon as={<MaterialCommunityIcons name="clock-time-four-outline"/>} size="xl"
                _light={{ color: "#828282" }}
                _dark={{ color: "gray.300" }}
            />
            <Text style={styles.time}>{item.time}</Text>
          </View>

        </Card>
      ))}
    </>
  );
};

export default CardView;

const styles = StyleSheet.create({
    type: {
        marginTop:20,
        color: "#8D46AC",
        fontSize: 14,
        lineHeight:20,
        fontFamily:'Inter-regular'
    },
    title: {
        color: "#333333",
        fontSize: 24,
        lineHeight:29.05,
        fontFamily:'Inter-bold'
    },
    spice: {
        color: "#828282",
        fontSize: 16,
        lineHeight:19,
        fontFamily:'Inter-regular'
    },
    timeView: {
        marginVertical: 12.5,
        flexDirection:'row',
        alignItems:'center'
    },
    time: {
        color: "#828282",
        fontSize: 14,
        lineHeight:20,
        fontFamily:'Inter-regular',
        paddingLeft:11
    },
})
