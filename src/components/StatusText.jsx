import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image
} from "react-native";

export default function StatusText({ status, name }) {
  const renderMessage = () => {
    if (status === "search") return "Buscando...";
    if (status === "ready") return name;
    if (status === "not_found") return "No se encontró";
    if (status === "error") return "Error de red o de servidor";
    return "";
  };

  const colorBg = () => {
    if (status === "search") return "#3843D0";
    if (status === "ready") return "#4ADE80";
    if (status === "not_found") return "#FDE047";
    if (status === "error") return "#F75555";
    return "#3843D0";
  };

  return (
    <Text
      style={{
        ...styles.text_image,
        backgroundColor: colorBg(),
        color: status === "not_found" ? "#0F172A" : "#F8FAFC"
      }}
    >
      {renderMessage()}
    </Text>
  );
}

const styles = StyleSheet.create({
  text_image: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  }
});
