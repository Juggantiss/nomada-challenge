import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SelectSource() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.divider}></TouchableOpacity>
      <Text style={styles.subtitle}>Selecciona una foto</Text>
      <View style={styles.options}>
        <TouchableOpacity style={styles.btn_option}>
          <Ionicons name="ios-image-outline" size={20} color="black" />
          <Text style={styles.text_label}>Galeria de fotos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_option}>
          <Ionicons name="camera-outline" size={20} color="black" />
          <Text style={styles.text_label}>Cámara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  options: {
    flex: 0.65,
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 33,
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
  divider: {
    flex: 0.04,
    backgroundColor: "#F1F5F9",
    width: 48,
    marginTop: 12,
    marginBottom: 20,
    borderRadius: 50
  }
});
