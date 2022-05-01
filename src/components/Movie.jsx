import { StyleSheet, Text, View, Platform, Image, Button } from "react-native";

const Movie = ({ data, url }) => {
  return (
    <View style={styles.container}>
      <View style={styles.desc_movie}>
        <Text style={styles.title}>{data?.original_title}</Text>
        <Text style={styles.desc}>{data?.overview}</Text>
      </View>
      <View style={styles.photo_movie}>
        <Image
          style={styles.image}
          source={{
            uri: url + data?.poster_path
          }}
        />
        <Text style={styles.star}>{data?.vote_average} ⭐</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F1F5F9",
    flexDirection: "row",
    marginBottom: 15,
    borderRadius: 15,
    padding: 15
  },
  desc_movie: {
    width: "75%",
    height: 150,
    paddingRight: 15,
    justifyContent: "flex-start"
  },
  photo_movie: {
    width: "25%",
    height: 150,
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000000",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  desc: {
    marginTop: 10,
    fontSize: 15,
    textAlign: "left",
    color: "#000000",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 16
  },
  star: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  }
});

export default Movie;
