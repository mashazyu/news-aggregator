import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";

import { wrapper } from "../tests/utils";
import { articleMock } from "../tests/mocks";
import App from "./App";

vi.spyOn(axios, "get").mockImplementation(() =>
  Promise.resolve({
    data: {
      articles: [articleMock],
      status: "ok",
      totalResults: 1,
    },
  })
);

describe("App", () => {
  it("renders articles", async () => {
    const { asFragment } = render(<App />, { wrapper });

    await waitFor(() => expect(screen.getAllByText("Title")).toHaveLength(1));

    expect(asFragment()).toMatchSnapshot();
  });
});
