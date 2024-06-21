import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { wrapper } from "../../tests/utils";
import { articlesMock } from "../../tests/mocks";
import Articles from "./Articles";

vi.mock("@tanstack/react-query", async () => {
  const actual = await vi.importActual("@tanstack/react-query");
  return {
    ...actual,
    useInfiniteQuery: vi.fn(),
  };
});

const data = {
  pages: [
    {
      status: "ok",
      totalResults: 3,
      articles: [...articlesMock],
    },
  ],
};

describe("Articles", () => {
  describe("are rendered without Load More button", () => {
    beforeEach(() => {
      useInfiniteQuery.mockReturnValue({
        data,
        isFetchingNextPage: false,
        hasNextPage: false,
        fetchNextPage: vi.fn(),
      });

      render(<Articles category="business" query="" />, { wrapper });
    });

    it("and Load More button is invisible, when no more articles are available", async () => {
      // wait till articles are rendered
      await waitFor(() =>
        expect(screen.getAllByText(/title/i)).toHaveLength(3)
      );

      expect(screen.queryByText("Load More")).not.toBeInTheDocument();
    });

    it("and no error message is visible", async () => {
      // wait till articles are rendered
      await waitFor(() =>
        expect(screen.getAllByText(/title/i)).toHaveLength(3)
      );

      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  describe("are not rendered", () => {
    beforeEach(() => {
      useInfiniteQuery.mockReturnValue({
        data: undefined,
        isFetchingNextPage: false,
        fetchNextPage: vi.fn(),
        status: "error",
        error: new Error("Network error"),
      });

      render(<Articles category="business" query="" />, { wrapper });
    });

    it("and error message is visible, when API an returns error message", async () => {
      // wait till articles are rendered
      await waitFor(() =>
        expect(screen.getByRole("alert")).toBeInTheDocument()
      );

      expect(screen.queryByText(/title/i)).not.toBeInTheDocument();
    });
  });

  describe("correct wording on button to load more article is rendered", () => {
    it("when there are more articles to display and loading of the next page is finished", async () => {
      useInfiniteQuery.mockReturnValue({
        hasNextPage: true,
        data,
        isFetchingNextPage: false,
        fetchNextPage: vi.fn(),
      });

      render(<Articles category="business" query="" />, { wrapper });
      // wait till articles are rendered
      await waitFor(() =>
        expect(screen.getAllByText(/title/i)).toHaveLength(3)
      );

      expect(screen.getByText("Load More")).toBeInTheDocument();
    });

    it("when there are more articles to display and loading of the next page is in progress", async () => {
      useInfiniteQuery.mockReturnValue({
        hasNextPage: true,
        data,
        isFetchingNextPage: true,
        fetchNextPage: vi.fn(),
      });

      render(<Articles category="business" query="" />, { wrapper });

      await waitFor(() =>
        expect(screen.getByText("Loading more...")).toBeInTheDocument()
      );
    });
  });
});
