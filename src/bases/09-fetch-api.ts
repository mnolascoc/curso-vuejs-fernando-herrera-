import { GiphyResponse } from "./../interfaces/giphy.response";
const apiKey = "MfpLVig2xTmk3a8Dse09pHXS4skr1rAz";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((response) => response.json())
  .then((body: GiphyResponse) => console.log(body.data.images.original.url))
  .catch((error) => console.log(error));
