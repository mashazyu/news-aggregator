import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { articleMock } from "../../tests/mocks";
import Article from "./Article";

describe("Article", () => {
  it("renders article", () => {
    render(<Article article={articleMock} />);

    // renders all elements
    expect(
      screen.getByText(articleMock.creator[0], { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText(articleMock.title)).toBeInTheDocument();
    expect(screen.getByText(articleMock.description)).toBeInTheDocument();
    expect(screen.getByText(articleMock.keywords[0])).toBeInTheDocument();

    // renders correct links
    const links = screen.getAllByRole("link");
    const hasCorrectUrl = (url) =>
      links.some((link) => link.getAttribute("href") === url);
    const expectedUrls = [articleMock.source_url, articleMock.link];
    expectedUrls.forEach((url) => expect(hasCorrectUrl(url)).toBe(true));
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

  it("renders image placeholder, if no image url provided", () => {
    const articleWithoutImage = {
      image_url: null,
    };
    render(<Article article={articleWithoutImage} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("No image available")).toBeInTheDocument();
  });
});
