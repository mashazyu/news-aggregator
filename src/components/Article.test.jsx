import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { articleMock } from "../../tests/mocks";
import Article from "./Article";

describe("Article", () => {
  it("renders article", () => {
    render(<Article article={articleMock} />);

    expect(
      screen.getByText(articleMock.author, { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText(articleMock.title)).toBeInTheDocument();
    expect(screen.getByText(articleMock.description)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Learn more" })).toHaveAttribute(
      "href",
      articleMock.url
    );
  });

  it("renders no author line, if no author provided", () => {
    const articleWithoutAuthor = {
      title: articleMock.title,
      description: articleMock.description,
      url: articleMock.url,
    };
    render(<Article article={articleWithoutAuthor} />);

    expect(screen.queryByText("by")).not.toBeInTheDocument();
  });
});
