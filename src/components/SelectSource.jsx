import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";

import { Ionicons } from "@expo/vector-icons";
import {
  changeStatus,
  changeStatusFetch,
  reset
} from "../redux/actions/stateUi";

import StatusText from "./StatusText";
import { getStatusByFetchResponse } from "../utils/getStatusByFetchResponse";
import { uploadPhoto } from "../services/photo";
import { searchActor } from "../services/movies";

export default function SelectSource({ close, navigation }) {
  const [image, setImage] = useState(null);
  const stateUi = useSelector((state) => state.stateUi);
  const dispatch = useDispatch();

  const openPictureProvider = async (type) => {
    let result = await ImagePicker[type]({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
      let uriParts = result.uri.split(".");
      let fileType = uriParts[uriParts.length - 1];
      const file = {
        name: `actor.${fileType}`,
        type: `image/${fileType}`,
        uri: result.uri
      };
      await upload(file);
    }
  };

  const upload = async (file) => {
    dispatch(changeStatus("Subiendo..."));
    dispatch(
      changeStatusFetch({
        text: "Subiendo...",
        color: "#3843D0"
      })
    );
    const formData = new FormData();
    formData.append("file", file);
    const response = await uploadPhoto(formData);
    if (response === "error") {
      const statusMessage = getStatusByFetchResponse(response);
      dispatch(changeStatus(statusMessage.text));
      dispatch(changeStatusFetch(statusMessage.details));
    } else {
      const fetchStatus = Boolean(response.actorName) ? "success" : "notFound";
      const statusMessage = getStatusByFetchResponse(
        fetchStatus,
        response.actorName
      );
      dispatch(changeStatus(statusMessage.text));
      dispatch(changeStatusFetch(statusMessage.details));
      if (Boolean(response.actorName)) {
        setTimeout(async () => {
          const movies = await searchActor(response.actorName);
          navigation.navigate("Actor", { movies });
        }, 500);
      }
    }
  };

  const handleClose = () => {
    close();
    setImage(null);
    dispatch(reset());
  };

  return (
    <>
      <TouchableOpacity style={styles.divider} onPress={close} />
      <Text style={styles.subtitle}>{stateUi.statusText}</Text>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image_preview} />
          <StatusText />
          {stateUi.statusFetch?.text !== "Subiendo..." &&
            stateUi.statusFetch?.text !== "Listo" && (
              <TouchableOpacity style={styles.btn_close} onPress={handleClose}>
                <Text style={styles.btn_text}>Cerrar</Text>
              </TouchableOpacity>
            )}
        </>
      ) : (
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.btn_option}
            onPress={() => openPictureProvider("launchImageLibraryAsync")}
          >
            <Ionicons name="ios-image-outline" size={20} color="black" />
            <Text style={styles.text_label}>Galeria de fotos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn_option}
            onPress={() => openPictureProvider("launchCameraAsync")}
          >
            <Ionicons name="camera-outline" size={20} color="black" />
            <Text style={styles.text_label}>C??mara</Text>
          </TouchableOpacity>
        </View>
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
    height: 210,
    marginTop: 20,
    borderRadius: 36
  },
  btn_close: {
    width: "90%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3843D0",
    marginBottom: 32,
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 12
  },
  btn_text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" }
    })
  }
});
