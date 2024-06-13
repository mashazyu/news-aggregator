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
});
