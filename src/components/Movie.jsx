import { StyleSheet, Text, View, Platform, Image, Button } from "react-native";

const Movie = () => (
  <View style={styles.container}>
    <View style={styles.desc_movie}>
      <Text style={styles.title}>Suicide Squad</Text>
      <Text style={styles.desc}>
        From DC Comics comes the Suicide Squad, an antihero team of incarcerated
        supervillains who act as deniable assets for the United...
      </Text>
    </View>
    <View style={styles.photo_movie}>
      <Image
        style={styles.image}
        source={{
          uri: "https://image.tmdb.org/t/p/w500/xFw9RXKZDvevAGocgBK0zteto4U.jpg"
        }}
      />
      <Text style={styles.star}>5.9 ⭐</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    backgroundColor: "#F1F5F9",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 15,
    borderRadius: 16
  },
  desc_movie: {
    width: "70%",
    height: "100%",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "flex-start"
  },
  photo_movie: {
    width: "30%",
    height: "100%",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  title: {
    marginLeft: "5%",
    fontSize: 35,
    fontWeight: "700",
    color: "#000000",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  desc: {
    marginTop: 10,
    marginLeft: "5%",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    color: "#000000",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  image: { width: "80%", height: 140, borderRadius: 16, marginRight: 10 },
  star: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  }
});

export default Movie;
