import { useQuery } from "@tanstack/react-query";

import Article from "./components/Article";
import { getArticles } from "./api/articles";

function App() {
  const articlesQuery = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  const { data, isLoading, isError, error } = articlesQuery;
  const { articles } = data;

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{JSON.stringify(error)}</h1>;

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
