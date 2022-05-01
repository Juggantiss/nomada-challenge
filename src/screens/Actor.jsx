import React from "react";
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import InfoActor from "../components/InfoActor";
import Movie from "../components/Movie";

export default function Actor({ route }) {
  const { movies } = route.params;
  console.log(movies);

  return (
    <View style={styles.container}>
      <InfoActor />
      <View style={styles.movies}>
        <Text style={styles.title}>Peliculas:</Text>
        <ScrollView
          style={styles.movies_container}
          showsVerticalScrollIndicator={false}
        >
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  movies: {
    backgroundColor: "#fff",
    width: "100%",
    height: "60%",
    paddingHorizontal: 15
  },
  movies_container: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 15,
    color: "#000000",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  }
});
