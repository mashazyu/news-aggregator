import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import nock from "nock";

import { wrapper } from "../../tests/utils";
import { articleMock } from "../../tests/mocks";
import Articles from "./Articles";

nock("https://newsapi.org")
  .defaultReplyHeaders({
    "access-control-allow-origin": "*",
    "access-control-allow-credentials": "true",
  })
  .get((uri) => uri.includes("/v2/top-headlines"))
  .reply(200, {
    articles: [articleMock, articleMock, articleMock],
    isLoading: false,
    isError: false,
    error: null,
  });

describe("Articles", () => {
  it("renders articles", async () => {
    render(<Articles category="business" query="" />, { wrapper });

    await waitFor(() => expect(screen.getAllByText("Title")).toHaveLength(3));
  });
});
