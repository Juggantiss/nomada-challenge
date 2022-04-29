import { StyleSheet, Text, Platform } from "react-native";
import { useSelector } from "react-redux";

export default function StatusText() {
  const stateUi = useSelector((state) => state.stateUi);

  return (
    <Text
      style={{
        ...styles.text_image,
        backgroundColor: stateUi.statusFetch?.color,
        color: stateUi.statusFetch?.colorText
          ? stateUi.statusFetch.colorText
          : "#F8FAFC"
      }}
    >
      {stateUi.statusFetch?.name
        ? stateUi.statusFetch.name
        : stateUi.statusFetch?.text}
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
