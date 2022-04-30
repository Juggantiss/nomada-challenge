import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  Animated,
  TouchableOpacity,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Actor({ route }) {
  // const { movies } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image_actor}
          source={{
            uri: "https://graziamagazine.com/mx/wp-content/uploads/sites/13/2018/08/will-smith-luce-espectacular-a-semanas-de-cumplir-50-anos-destacada.jpg?fit=4200%2C2795"
          }}
        />
        <TouchableOpacity style={styles.arrow_back}>
          <Ionicons name="arrow-back-outline" size={35} color="black" />
        </TouchableOpacity>
        <View style={styles.desc_actor}>
          <View style={styles.info_actor}>
            <Text style={styles.name_actor}>Will Smith</Text>
            <Text style={styles.gender_actor}>Hombre</Text>
          </View>
          <View style={styles.average_actor}>
            <Text style={styles.text_average}>Popularidad:</Text>
            <Text style={styles.star_average}>27.97 ⭐</Text>
          </View>
        </View>
      </View>
      <View style={styles.movies_container}>
        <Text style={styles.title}>Peliculas:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  header: {
    width: "100%"
  },
  image_actor: {
    width: "100%",
    height: 400
  },
  arrow_back: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    position: "absolute",
    top: 50,
    left: 20,
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  desc_actor: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  info_actor: {
    width: "50%",
    height: "100%",
    alignItems: "flex-start"
  },
  average_actor: {
    width: "40%",
    height: "80%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  movies_container: {
    height: "100%",
    marginTop: 10,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%"
  },
  name_actor: {
    fontSize: 32,
    fontWeight: "700",
    color: "#F8FAFC",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  text_average: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F8FAFC",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  star_average: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F8FAFC",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  gender_actor: {
    backgroundColor: "#FACC15",
    width: "auto",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 35,
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: "#000000",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#475569",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  }
});
