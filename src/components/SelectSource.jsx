import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function SelectSource({ close, setPreview }) {
  const [image, setImage] = useState(null);

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setPreview(true);
    }
  };

  const openGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setPreview(true);
    }
  };

  return (
    <>
      {image ? (
        <>
          <TouchableOpacity
            style={{ ...styles.divider, flex: 0.5 }}
            onPress={close}
          />
          <Text style={styles.subtitle}>Subiendo...</Text>
          <Image source={{ uri: image }} style={styles.image_preview} />
          <Text style={styles.text_image}>Buscando...</Text>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.divider} onPress={close} />
          <Text style={styles.subtitle}>Selecciona una foto</Text>
          <View style={styles.options}>
            <TouchableOpacity style={styles.btn_option} onPress={openGalery}>
              <Ionicons name="ios-image-outline" size={20} color="black" />
              <Text style={styles.text_label}>Galeria de fotos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_option} onPress={openCamera}>
              <Ionicons name="camera-outline" size={20} color="black" />
              <Text style={styles.text_label}>Cámara</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  options: {
    width: "90%",
    marginTop: 30,
    marginBottom: 56,
    marginLeft: "5%",
    marginRight: "5%"
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
  btn_option: {
    padding: 10,
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  text_label: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "500",
    color: "#0F172A",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  text_image: {
    backgroundColor: "#3843D0",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#F8FAFC",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  },
  divider: {
    backgroundColor: "#F1F5F9",
    width: 55,
    height: 7,
    marginTop: 12,
    marginBottom: 20,
    borderRadius: 50
  },
  image_preview: {
    width: 175,
    height: 211,
    marginTop: 20,
    borderRadius: 36
  }
});
