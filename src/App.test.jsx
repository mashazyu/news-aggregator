import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import { wrapper } from "../tests/utils";
import { articleMock } from "../tests/mocks";
import App from "./App";

const spy = vi.spyOn(axios, "get");

spy.mockImplementation(() =>
  Promise.resolve({
    pages: {
      results: [articleMock],
      status: "ok",
      totalResults: 1,
    },
  })
);

const getLastCalledURL = () => {
  const lastCall = spy.mock.calls.at(-1);

  return lastCall[0];
};

describe("App", () => {
  it.fails("renders articles with correct styling", async () => {
    const { asFragment } = render(<App />, { wrapper });

    await waitFor(() => expect(screen.getAllByText("Title")).toHaveLength(1));

    expect(asFragment()).toMatchSnapshot();
  });

  describe("sends correct API request", () => {
    beforeEach(() => render(<App />, { wrapper }));

    it.fails("when search input changes", async () => {
      const input = screen.getByRole("textbox");
      await userEvent.type(input, "abc");

      const url = getLastCalledURL();

      await waitFor(() => {
        // q search param is updated
        expect(url.searchParams.has("q")).toBe(true);
        expect(url.searchParams.get("q")).toBe("abc");
        // input value is udpated
        expect(input).toHaveValue("abc");
      });
    });

    it.fails("when category selection changes", async () => {
      const category = screen.getByRole("radio", { name: /general/i });
      await userEvent.click(category);

      const url = getLastCalledURL();

      await waitFor(() => {
        // category search param is updated
        expect(url.searchParams.has("category")).toBe(true);
        expect(url.searchParams.get("category")).toBe("general");
        // q param is set to '' on category change
        expect(url.searchParams.has("q")).toBe(true);
        expect(url.searchParams.get("q")).toBe("");
        // category selection changes
        expect(category).toBeChecked();
      });
    });
  });
});
