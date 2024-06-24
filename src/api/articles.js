import axios from "axios";

import { ENDPOINT, API_KEY } from "../constants";

export const getArticles = async ({ category, page, query }) => {
  const url = new URL(ENDPOINT);
  const params = new URLSearchParams({
    category,
    country: "de",
  });

  if (query) params.append("q", query);
  if (page) params.append("page", page);

  url.search = params.toString();

  const { data } = await axios.get(url, {
    headers: {
      "X-ACCESS-KEY": API_KEY,
    },
  });

  return data;
};
