import { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Platform,
  TouchableOpacity
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Home() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hey, Dev 👋</Text>
        <Text style={styles.subtitle}>Keep up the good work!</Text>
      </View>
      <View style={styles.uploader}>
        <Text style={styles.text}>¿Quién es el famoso?</Text>
        {/* <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )} */}
        <TouchableOpacity style={styles.dragZone} onPress={pickImage}>
          <Image
            source={require("../../assets/image-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.dragText}>
            Presiona para seleccionar una foto
          </Text>
        </TouchableOpacity>
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
  dragZone: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#F1F5F9",
    marginTop: 10,
    borderRadius: 1,
    borderWidth: 2,
    borderColor: "#3843D0",
    borderStyle: "dashed"
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
  },
  dragText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#3843D0",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10
  }
});
