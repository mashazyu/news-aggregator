import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { wrapper } from "../../tests/utils";
import { articlesMock as articles } from "../../tests/mocks";
import Articles from "./Articles";
import axios from "axios";

vi.spyOn(axios, "get").mockImplementation(() =>
  Promise.resolve({
    data: {
      articles,
      isLoading: false,
      isError: false,
      error: null,
    },
  })
);

describe("Articles", () => {
  it("renders articles", async () => {
    render(<Articles category="business" query="" />, { wrapper });

    await waitFor(() => expect(screen.getAllByText("Title")).toHaveLength(3));
    expect(screen.getByText("Load More")).toBeInTheDocument();
    expect(screen.queryByText("Loading more...")).not.toBeInTheDocument();
  });
});
