import { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  TouchableOpacity
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function DragZone() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
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
    <TouchableOpacity style={styles.dragZone} onPress={pickImage}>
      <Image
        source={require("../../assets/image-icon.png")}
        style={styles.icon}
      />
      <Text style={styles.dragText}>Presiona para seleccionar una foto</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
