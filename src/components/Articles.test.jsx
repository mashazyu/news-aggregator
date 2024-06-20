import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { wrapper } from "../../tests/utils";
import { mockAPIResponse } from "../../tests/mocks";
import Articles from "./Articles";
import axios from "axios";

const spy = vi.spyOn(axios, "get");
spy
  .mockImplementationOnce(() => Promise.resolve({ ...mockAPIResponse }))
  .mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        ...mockAPIResponse.data,
        totalResults: 30,
      },
    })
  );

describe("Articles", () => {
  beforeEach(() =>
    render(<Articles category="business" query="" />, { wrapper })
  );

  it("renders articles and no Load More button, when no more articles are available", async () => {
    await waitFor(() => expect(screen.getAllByText(/title/i)).toHaveLength(3));
    expect(screen.queryByText("Load More")).not.toBeInTheDocument();
  });

  it("renders Load More button, when more articles to display", async () => {
    await waitFor(() => expect(screen.getAllByText(/title/i)).toHaveLength(3));
    expect(screen.getByText("Load More")).toBeInTheDocument();
  });
});
