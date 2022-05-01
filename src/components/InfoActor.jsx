import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InfoActor = () => (
  <View style={styles.container}>
    <Image
      style={styles.image_actor}
      source={{
        uri: "https://graziamagazine.com/mx/wp-content/uploads/sites/13/2018/08/will-smith-luce-espectacular-a-semanas-de-cumplir-50-anos-destacada.jpg?fit=4200%2C2795"
      }}
    />
    <View style={styles.desc_actor}>
      <View style={styles.info_actor}>
        <Text style={styles.name_actor}>Will Smith</Text>
        <View style={styles.gender}>
          <Text style={styles.gender_actor}>Hombre</Text>
        </View>
      </View>
      <View style={styles.average_actor}>
        <Text style={styles.text_average}>Popularidad:</Text>
        <Text style={styles.star_average}>27.97 ⭐</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "40%"
  },
  image_actor: {
    width: "100%",
    height: "100%"
  },
  desc_actor: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    padding: 15
  },
  average_actor: {
    justifyContent: "center"
  },
  name_actor: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: "700",
    color: "#F8FAFC",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  text_average: {
    fontSize: 15,
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
  gender: {
    backgroundColor: "#FACC15",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 35
  },
  gender_actor: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  }
});

export default InfoActor;
