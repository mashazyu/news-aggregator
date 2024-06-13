import axios from "axios";

export const getArticles = async () => {
  const { data } = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=apiKey"
  );
  console.log("// data in getArticles ", data);
  return data;
};
