import axios from "axios";

const baseUrl = "https://whois.nomada.cloud/upload";
const nomadaKey = "ZjYyMWUxZDktNWVhMS00NDlkLWEwZTEtN2FhY2MxNzNjZTc4";

export const uploadPhoto = async (file) => {
  try {
    const response = await axios.post(baseUrl, file, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Nomada: nomadaKey
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return "error";
  }
};
