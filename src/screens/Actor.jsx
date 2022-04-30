import React from "react";
import { StyleSheet, Text, View, Platform, Image, Button } from "react-native";
import InfoActor from "../components/InfoActor";

export default function Actor({ route }) {
  // const { movies } = route.params;

  return (
    <View style={styles.container}>
      <InfoActor />
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
  movies_container: {
    height: "100%",
    marginTop: 10,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%"
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
