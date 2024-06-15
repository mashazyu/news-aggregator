import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import Article from "./Article";
import CategoryToggle from "./CategoryToggle";
import { getArticles } from "../api/articles";
import { filterRemovedArticles } from "../lib/utils";

import { CATEGORIES } from "../constants";

function ArticlesPage() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const articlesQuery = useQuery({
    queryKey: ["articles", category],
    queryFn: () => getArticles({ category }),
  });

  const { data, isLoading, isError, error } = articlesQuery;

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{JSON.stringify(error)}</h1>;

  // Some articles might be removed, so I filter those articles out
  const articles = filterRemovedArticles(data.articles);

  return (
    <main className="container mx-auto py-8">
      <CategoryToggle category={category} setCategory={setCategory} />
      <Separator />
      <div className="grid grid-cols-3 gap-8 py-8">
        {articles.map((article) => (
          <Article article={article} key={article.title} />
        ))}
      </div>
    </main>
  );
}

export default ArticlesPage;
