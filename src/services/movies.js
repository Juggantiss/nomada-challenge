import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/search/person";
const api_key = "30db1237b9167f8afaf9e065b90d16b8";

export const searchActor = async (name) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        api_key,
        query: name
      }
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return "error";
  }
};
