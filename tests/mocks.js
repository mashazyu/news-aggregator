export const articleMock = {
  article_id: "123",
  keywords: ["sport", "football"],
  creator: ["Author"],
  image_url: "https://image.url",
  description: "Description",
  link: "https://mock.url",
  pubDate: "2023-02-30",
  source_id: "sourceId",
  source_icon: "sourceIcon",
  source_url: "https://source.url",
  title: "Title",
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
