import { StyleSheet, Text, View, Platform } from "react-native";
import DragZone from "../components/DragZone";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hey, Dev 👋</Text>
        <Text style={styles.subtitle}>Keep up the good work!</Text>
      </View>
      <View style={styles.uploader}>
        <Text style={styles.text}>¿Quién es el famoso?</Text>
        {/* {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )} */}
        <DragZone />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  header: {
    flex: 0.12,
    marginTop: 50,
    marginLeft: "5%",
    backgroundColor: "#E5E5E5",
    width: "95%"
  },
  uploader: {
    flex: 0.88,
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#E5E5E5",
    width: "90%"
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0F172A",
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
