import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";

import Article from "./Article";
import { getArticles } from "../api/articles";
import { filterRemovedArticles } from "../lib/utils";

function Articles({ category, query }) {
  const articlesQuery = useQuery({
    queryKey: ["articles", category, query],
    queryFn: () => getArticles({ category, query }),
  });

  const { data, isLoading, isError, error } = articlesQuery;

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{JSON.stringify(error)}</h1>;

  // Some articles might be removed, so I filter those articles out
  const articles = filterRemovedArticles(data.articles);

  return (
    <div className="grid grid-cols-3 gap-8 py-8">
      {articles.map((article) => (
        <Article article={article} key={article.title} />
      ))}
    </div>
  );
}

Articles.propTypes = {
  category: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default Articles;
