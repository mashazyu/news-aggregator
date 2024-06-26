import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import { wrapper } from "../tests/utils";
import { articlesMock } from "../tests/mocks";
import App from "./App";

const spy = vi.spyOn(axios, "get");
const data = {
  status: "success",
  totalResults: 3,
  results: [...articlesMock],
};

spy.mockReturnValue({ data });

const getLastCalledURL = () => {
  const lastCall = spy.mock.calls.at(-1);

  return lastCall[0];
};

describe("App", () => {
  it("renders articles with correct styling", async () => {
    const { asFragment } = render(<App />, { wrapper });

    await waitFor(() => expect(screen.getAllByText(/title/i)).toHaveLength(3));

    expect(asFragment()).toMatchSnapshot();
  });

  describe("sends correct API request", () => {
    beforeEach(() => render(<App />, { wrapper }));

    it("when search input changes", async () => {
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

    it("when category selection changes", async () => {
      const category = screen.getByRole("radio", { name: /general/i });
      await userEvent.click(category);

      const url = getLastCalledURL();

      await waitFor(() => {
        // category search param is updated
        expect(url.searchParams.has("category")).toBe(true);
        expect(url.searchParams.get("category")).toBe("general");
        // category selection changes
        expect(category).toBeChecked();
      });
    });
  });
});
