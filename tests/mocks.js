export const articleMock = {
  author: "Author",
  title: "Title",
  description: "Description",
  url: "https://mock.url",
};

export const articlesMock = [
  {
    ...articleMock,
    title: "Title 1",
  },
  {
    ...articleMock,
    title: "Title 2",
  },
  {
    ...articleMock,
    title: "Title 3",
  },
];

export const mockAPIResponse = {
  data: {
    articles: articlesMock,
    status: "ok",
    totalResults: 3,
  },
};
