import axios from "axios";

const PAGE_SIZE = 9;
const ENDPOINT = "https://newsapi.org/v2/top-headlines?country=de";
const API_KEY = "apiKey";

export const getArticles = async ({ category, query }) => {
  const { data } = await axios.get(
    `${ENDPOINT}&q=${query}&category=${category}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
  );

  return data;
};
