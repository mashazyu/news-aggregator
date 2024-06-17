import PropTypes from "prop-types";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Button } from "./ui/button";
import Article from "./Article";
import { getArticles } from "../api/articles";
import { filterRemovedArticles } from "../lib/utils";

import { PAGE_SIZE } from "../constants";

function Articles({ category, query }) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["articles", category, query],
    queryFn: ({ pageParam }) =>
      getArticles({ category, page: pageParam, query }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.totalResults <= pages.length * PAGE_SIZE) return null;

      return pages.length;
    },
  });

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {data.pages.map((currentPage) => {
          // Api returns entries with [Removed] in title and content.
          // Below I am filtering out those entries.
          const articles = filterRemovedArticles(currentPage.articles);

          return articles.map((article) => (
            <Article article={article} key={article.title} />
          ));
        })}
      </div>
      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </Button>
      )}
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}

Articles.propTypes = {
  category: PropTypes.string.isRequired,
  query: PropTypes.string,
};

export default Articles;
