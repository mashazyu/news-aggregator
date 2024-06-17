import axios from "axios";

import { PAGE_SIZE, ENDPOINT, API_KEY } from "../constants";

export const getArticles = async ({ category, page, query }) => {
  const url = new URL(ENDPOINT);
  const params = new URLSearchParams({
    country: "de",
    pageSize: PAGE_SIZE,
    apiKey: API_KEY,
    q: query,
    category,
    page,
  });

  url.search = params.toString();

  const { data } = await axios.get(url);

  return data;
};
