import axios from "axios";
import { GiphyResponse } from "../interfaces/giphy.response";

const apiKey = "MfpLVig2xTmk3a8Dse09pHXS4skr1rAz";

export const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

// giphyApi
//   .get<GiphyResponse>("/random")
//   .then((resp) => console.log(resp.data))
//   .catch((error) => console.log(error));
