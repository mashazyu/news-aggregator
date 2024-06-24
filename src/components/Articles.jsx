import PropTypes from "prop-types";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Button } from "./ui/button";

import Article from "./Article";
import Loader from "./Loader";

import { getArticles } from "../api/articles";

function Articles({ category, query }) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["articles", category, query],
    queryFn: ({ pageParam }) =>
      getArticles({ category, page: pageParam, query }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });

  return status === "pending" ? (
    <Loader />
  ) : status === "error" ? (
    <div className="pt-16">
      <p role="alert" className="error-message text-sm text-red-500 mt-1">
        Error: {error.message}
      </p>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
        {data.pages.map((currentPage) => {
          return currentPage.results.map((article) => (
            <Article article={article} key={article.article_id} />
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
    </>
  );
}

Articles.propTypes = {
  category: PropTypes.string.isRequired,
  query: PropTypes.string,
};

export default Articles;
