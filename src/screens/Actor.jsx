import React from "react";
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import InfoActor from "../components/InfoActor";
import Movie from "../components/Movie";

export default function Actor({ route }) {
  const { movies } = route.params;
  console.log(movies);
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const dataInfoActor = {
    photo: baseUrl + movies?.results[0]?.profile_path,
    name: movies?.results[0]?.name,
    gender:
      movies?.results[0]?.gender === 1
        ? "Mujer"
        : movies?.results[0]?.gender === 2
        ? "Hombre"
        : "Indefinido",
    popularity: movies?.results[0]?.popularity
  };

  return (
    <View style={styles.container}>
      <InfoActor dataInfoActor={dataInfoActor} />
      <View style={styles.movies}>
        <Text style={styles.title}>Peliculas:</Text>
        <ScrollView
          style={styles.movies_container}
          showsVerticalScrollIndicator={false}
        >
          {movies?.results[0]?.known_for?.map((movie) => (
            <Movie key={movie.id} data={movie} url={baseUrl} />
          ))}
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
