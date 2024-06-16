import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import nock from "nock";

import { wrapper } from "../tests/utils";
import { articleMock } from "../tests/mocks";
import App from "./App";

nock("https://newsapi.org")
  .defaultReplyHeaders({
    "access-control-allow-origin": "*",
    "access-control-allow-credentials": "true",
  })
  .get((uri) => uri.includes("/v2/top-headlines"))
  .reply(200, {
    articles: [articleMock],
    isLoading: false,
    isError: false,
    error: null,
  });

describe("App", () => {
  it("renders articles", async () => {
    const { asFragment } = render(<App />, { wrapper });

    await waitFor(() => expect(screen.getAllByText("Title")).toHaveLength(1));

    expect(asFragment()).toMatchSnapshot();
  });
});
