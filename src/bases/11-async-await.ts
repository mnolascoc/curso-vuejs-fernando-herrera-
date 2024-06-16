import { giphyApi } from "./10-axios";

export const getImage = async () => {
  try {
    const response = await giphyApi.get("/randoms");
    return response.data.data.images;
  } catch (error) {
    throw new Error("url not found");
  }
};

getImage()
  .then((url) => console.log(url))
  .catch((error) => console.log(error));
