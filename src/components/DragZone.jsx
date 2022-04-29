import {
  StyleSheet,
  Image,
  Text,
  Platform,
  TouchableOpacity
} from "react-native";

export default function DragZone({ open, opened }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.dragZone,
        backgroundColor: opened ? "rgba(15, 23, 42, 0.2)" : "#F1F5F9"
      }}
      onPress={open}
    >
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
    height: "17%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
