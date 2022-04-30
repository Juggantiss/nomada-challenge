import React from "react";
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import InfoActor from "../components/InfoActor";
import Movie from "../components/Movie";

export default function Actor({ route }) {
  // const { movies } = route.params;

  return (
    <View style={styles.container}>
      <InfoActor />
      <Text style={styles.title}>Peliculas:</Text>
      <ScrollView style={styles.movies_container}>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  movies_container: {
    width: "90%",
    height: "100%",
    marginTop: 16,
    marginLeft: "5%",
    marginRight: "5%"
  },
  title: {
    marginTop: 10,
    marginLeft: "5%",
    fontSize: 35,
    fontWeight: "700",
    color: "#000000",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  }
});
