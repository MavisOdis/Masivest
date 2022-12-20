import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  Divider,
  Icon,
  Input,
  Stack,
  View,
} from "native-base";
import Constants from "expo-constants";
import { Octicons, Ionicons, AntDesign } from "@expo/vector-icons";
import CardView from "../../componets/Home/homeCard";
import NewsLetter from "../../componets/Home/newsLetter";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          alignItems: "center",
        }}
      >
        <Text style={styles.headerText}>Cakes</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Button variant={"outline"} m={2}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontFamily: "Inter-regular", paddingRight: 5 }}>
                ENG
              </Text>
              <Icon
                as={<AntDesign name="down" />}
                size="sm"
                style={{ top: 3 }}
              />
            </View>
          </Button>
          <TouchableOpacity>
            <Icon as={<Ionicons name="menu" />} size="3xl" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Header image with search bar */}
      <ImageBackground
        source={require("../../assets/card4.png")}
        style={{ width: width, height: height / 2.5 }}
      >
        <Text style={styles.mainText}>
          Free cake recipes for you and your family
        </Text>
        <Text style={styles.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
          massa in enim luctus. Rutrum arcu.
        </Text>
        <View style={styles.searchbarView}>
          <Input
            style={{ fontSize: 12, paddingLeft: -20 }}
            variant="unstyled"
            InputLeftElement={
              <Icon
                as={
                  <Octicons name="search" onPress={(text) => setSearch(text)} />
                }
                size="md"
                m={2}
                _light={{ color: "black" }}
                _dark={{ color: "gray.300" }}
              />
            }
            placeholder="Search..."
            _light={{ placeholderTextColor: "blueGray.400" }}
            _dark={{ placeholderTextColor: "blueGray.50" }}
          />
        </View>
        {/* <Icon name="search" size={20} /> */}
      </ImageBackground>
      {/* unstyled buttons for the dropdown menu */}
      <Stack
        style={{ marginVertical: 10, justifyContent: "space-evenly" }}
        direction={{ base: "row" }}
        alignItems={{ base: "center" }}
      >
        <Button variant={"unstyled"}>
          <Image
            source={require("../../assets/dropdown.png")}
            style={{ width: 25, height: 23 }}
          />
        </Button>
        <Button variant={"outline"}>Vegan</Button>
        <Button variant={"outline"}>Lactose Free</Button>
        <Button variant={"outline"}>Sugar Free</Button>
      </Stack>

      <Divider color={"gray.100"} />

      {/* card view for each item */}
      <CardView />

      {/*News letter card  */}
      <Divider color={"gray.100"} style={{marginVertical:20}} />

      <NewsLetter/>

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "Cinderela",
  },
  headerText: {
    fontSize: 25,
    fontFamily: "Cinderela",
    color: "#6E3886",
  },
  mainText: {
    lineHeight: 46,
    fontSize: 36,
    fontFamily: "Inter-black",
    textAlign: "center",
    color: "#fff",
    top: 30,
  },
  subText: {
    fontSize: 12,
    lineHeight: 26,
    color: "#fff",
    fontFamily: "Inter-regular",
    top: 30,
    textAlign: "center",
  },
  searchbarView: {
    backgroundColor: "#fff",
    height: 40,
    width: width / 1.3,
    alignSelf: "center",
    borderRadius: 20,
    top: 50,
    justifyContent: "center",
  },
});
