import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { wrapper } from "../../tests/utils";
import { mockAPIResponse } from "../../tests/mocks";
import Articles from "./Articles";
import axios from "axios";

const spy = vi.spyOn(axios, "get");

describe("Articles", () => {
  describe("are rendered", () => {
    beforeEach(() => {
      spy.mockImplementation(() => Promise.resolve({ ...mockAPIResponse }));

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

  describe("and Load More button are rendered", () => {
    beforeEach(() => {
      spy.mockImplementation(() =>
        Promise.resolve({
          data: {
            ...mockAPIResponse.data,
            totalResults: 30,
          },
        })
      );

      render(<Articles category="business" query="" />, { wrapper });
    });

    it("when there are more articles to display", async () => {
      // wait till articles are rendered
      await waitFor(() =>
        expect(screen.getAllByText(/title/i)).toHaveLength(3)
      );

      expect(screen.getByText("Load More")).toBeInTheDocument();
    });
  });

  describe("are not rendered", () => {
    beforeEach(() => {
      spy.mockRejectedValue(new Error("Network error"));

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
});
