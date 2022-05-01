import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Animated,
  TouchableOpacity,
  Button
} from "react-native";
import DragZone from "../components/DragZone";
import SelectSource from "../components/SelectSource";

export default function Home({ navigation }) {
  const [open, setOpen] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }).start();
    setOpen(true);
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start();
    setOpen(false);
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: open ? "rgba(15, 23, 42, 0.5)" : "#FFFFFF"
      }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Hey, Dev 👋</Text>
        <Text style={styles.subtitle}>Keep up the good work!</Text>
      </View>
      <View style={styles.uploader}>
        <Text style={styles.text}>¿Quién es el famoso?</Text>
        <DragZone open={fadeIn} opened={open} />
      </View>
      <Animated.View
        style={[
          { ...styles.footer },
          {
            opacity: fadeAnim
          }
        ]}
      >
        <SelectSource close={fadeOut} navigation={navigation} />
      </Animated.View>
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
    marginTop: 50,
    marginLeft: "5%",
    width: "95%"
  },
  uploader: {
    height: "100%",
    marginTop: 30,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
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
