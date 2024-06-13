import { describe, it, expect } from "vitest";

import { filterRemovedArticles } from "./utils";

describe("filterRemovedArticles", () => {
  it("true to be true", () => {
    const articles = [
      {
        title: "[Removed]",
      },
      {
        title: "regular title",
      },
      {
        title: "title contains word Removed",
      },
    ];
    expect(filterRemovedArticles(articles)).toHaveLength(2);
  });
});
