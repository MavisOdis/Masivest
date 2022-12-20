import { Icon } from "native-base";
import React from "react";
import { Dimensions, StyleSheet, Image, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CardView = () => {
  const totalStars = 5;
  const gainStars = 3;

  return (
    <>
      {[
        {
          type: "Itallian",
          title: "Cassata Ricotta",
          time: "15 minutes",
          rating: "34",
          spice: "Sponge Cake with Ricotta",
          image: <Image source={require("../../assets/card1.png")} />,
        },
        {
          type: "Itallian",
          title: "Cassata Ricotta",
          time: "15 minutes",
          rating: "32",
          spice: "Sponge Cake with Ricotta",
          image: <Image source={require("../../assets/card2.png")} />,
        },
        {
          type: "Itallian",
          title: "Cassata Ricotta",
          time: "15 minutes",
          rating: "40",
          spice: "Sponge Cake with Ricotta",
          image: <Image source={require("../../assets/card3.png")} />,
        },
        {
          type: "Itallian",
          title: "Cassata Ricotta",
          time: "15 minutes",
          rating: "15",
          spice: "Sponge Cake with Ricotta",
          image: <Image source={require("../../assets/card5.png")} />,
        },
        {
          type: "Itallian",
          title: "Cassata Ricotta",
          time: "15 minutes",
          rating: "30",
          spice: "Sponge Cake with Ricotta",
          image: <Image source={require("../../assets/card6.png")} />,
        },
        {
            type: "Itallian",
            title: "Cassata Ricotta",
            time: "15 minutes",
            rating: "30",
            spice: "Sponge Cake with Ricotta",
            image: <Image source={require("../../assets/card7.png")} />,
          },
          {
            type: "Itallian",
            title: "Cassata Ricotta",
            time: "15 minutes",
            rating: "30",
            spice: "Sponge Cake with Ricotta",
            image: <Image source={require("../../assets/card8.png")} />,
          },
          {
            type: "Itallian",
            title: "Cassata Ricotta",
            time: "15 minutes",
            rating: "30",
            spice: "Sponge Cake with Ricotta",
            image: <Image source={require("../../assets/card9.png")} />,
          },
      ].map((item, index) => (
        <Card
          key={index}
          style={{
            margin: 15,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: "#fff"
          }}
        >
          {item.image}
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.spice}>{item.spice}</Text>
          <View style={styles.timeView}>
            <Icon
              as={<MaterialCommunityIcons name="clock-time-four-outline" />}
              size="xl"
              _light={{ color: "#828282" }}
              _dark={{ color: "gray.300" }}
            />
            <Text style={styles.time}>{item.time}</Text>
          </View>

          {/* Ratings view */}
          <View style={styles.ratings}>
            {Array.from({ length: gainStars }, (x, i) => {
              return (
                <MaterialIcons key={i} name="star" size={20} color="#FFA000" />
              );
            })}

            {Array.from({ length: totalStars - gainStars }, (x, i) => {
              return (
                <MaterialIcons
                  key={i}
                  name="star-border"
                  size={20}
                  color="#FFA000"
                />
              );
            })}
          <Text style={styles.ratingsNum}>{item.rating}</Text>
          </View>
          <View style={{flexDirection:'row',alignSelf:'flex-end',top:4}}>
            <View style={{backgroundColor:'#FFF9C5',marginRight:8,borderRadius:8}}>
                <Text style={styles.vigan}>Sugar free</Text>
            </View>
            <View style={{backgroundColor:'#EEC8FF',alignItems:'center',borderRadius:8}}>
                <Text style={styles.vigan}>Vegan</Text>
            </View>
          </View>
        </Card>
      ))}
    </>
  );
};

export default CardView;

const styles = StyleSheet.create({
  type: {
    marginTop: 20,
    color: "#8D46AC",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter-regular",
  },
  title: {
    color: "#333333",
    fontSize: 24,
    lineHeight: 29.05,
    fontFamily: "Inter-bold",
  },
  spice: {
    color: "#828282",
    fontSize: 16,
    lineHeight: 19,
    top: 4,
    fontFamily: "Inter-regular",
  },
  timeView: {
    marginTop: 12.5,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: "#828282",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter-regular",
    paddingLeft: 11,
  },
  ratings: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
  },
  ratingsNum: {
    paddingLeft:10,
    fontFamily: "Inter-regular",
    fontSize: 14,
    color: "#828282"
  },
  vigan: {
    paddingHorizontal:8, 
    paddingVertical:4,
    fontFamily:"Inter-regular",
    color: "rgba(51, 51, 51, 1)"
  }
});
