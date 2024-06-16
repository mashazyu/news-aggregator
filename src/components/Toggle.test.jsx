import { beforeEach, describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Toggle from "./Toggle";

const OPTIONS = ["a", "b", "c"];
const handleClick = vi.fn();

describe("Toggle", () => {
  beforeEach(() =>
    render(
      <Toggle option={OPTIONS[0]} options={OPTIONS} setOption={handleClick} />
    )
  );

  it("renders all options", () => {
    OPTIONS.forEach((option) =>
      expect(screen.getByText(option.toUpperCase())).toBeInTheDocument()
    );
  });

  it("correct option is selected", () => {
    const selectedOption = screen.getByText(OPTIONS[0].toUpperCase());
    expect(selectedOption).toHaveAttribute("data-state", "on");
  });

  it("setOption is called on click", () => {
    const option = screen.getByText(OPTIONS[1].toUpperCase());

    fireEvent.click(option);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
