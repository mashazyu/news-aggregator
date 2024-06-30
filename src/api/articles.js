import axios from "axios";

import { ENDPOINT, API_KEY } from "../constants";

export const getArticles = async ({ category, language, page, query }) => {
  const url = new URL(ENDPOINT);
  const params = new URLSearchParams({
    category,
  });

  if (query) params.append("q", query);
  if (page) params.append("page", page);
  if (language !== "") params.append("language", language);

  url.search = params.toString();

  const { data } = await axios.get(url, {
    headers: {
      "X-ACCESS-KEY": API_KEY,
    },
  });

  return data;
};
