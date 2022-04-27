import { StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native-web";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hey, Dev 👋</Text>
        <Text style={styles.subtitle}>Keep up the good work!</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>¿Quién es el famoso?</Text>
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
    flex: 0.1,
    marginTop: 40,
    marginLeft: 16,
    backgroundColor: "#E5E5E5",
    width: "100%"
  },
  item: {
    flex: 0.9,
    marginLeft: 16,
    backgroundColor: "#E5E5E5",
    width: "100%"
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
