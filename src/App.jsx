import { useQuery } from "@tanstack/react-query";

import Article from "./components/Article";
import { getArticles } from "./api/articles";
import { filterRemovedArticles } from "./lib/utils";

function App() {
  const articlesQuery = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  const { data, isLoading, isError, error } = articlesQuery;

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{JSON.stringify(error)}</h1>;

  // Some articles might be removed, so I filter those articles out
  const articles = filterRemovedArticles(data.articles);

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-3 gap-8">
        {articles.map((article) => (
          <Article article={article} key={article.title} />
        ))}
      </div>
    </main>
  );
}

export default App;
