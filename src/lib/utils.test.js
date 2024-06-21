import { describe, it, expect } from "vitest";

import { filterRemovedArticles } from "./utils";

describe("filterRemovedArticles()", () => {
  it.each`
    articles                                                                      | filteredArticles
    ${[{ title: "[Removed]" }, { title: "[Removed]" }]}                           | ${[]}
    ${[{ title: "[Removed]" }, { title: "Removed" }]}                             | ${[{ title: "Removed" }]}
    ${[]}                                                                         | ${[]}
    ${[{ title: "Title with removed" }, { title: "Another title with Removed" }]} | ${[{ title: "Title with removed" }, { title: "Another title with Removed" }]}
  `(
    "filters $articles -> $filteredArticles",
    ({ articles, filteredArticles }) => {
      expect(filterRemovedArticles(articles)).toEqual(filteredArticles);
    }
  );
});
