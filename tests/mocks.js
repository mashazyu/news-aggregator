export const articleMock = {
  article_id: "123",
  creator: ["Author"],
  title: "Title",
  description: "Description",
  link: "https://mock.url",
};

export const articlesMock = [
  {
    ...articleMock,
    article_id: "123",
    title: "Title 1",
  },
  {
    ...articleMock,
    article_id: "456",
    title: "Title 2",
  },
  {
    ...articleMock,
    article_id: "789",
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
