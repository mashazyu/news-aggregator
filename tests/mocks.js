export const articleMock = {
  author: "Author",
  title: "Title",
  description: "Description",
  url: "https://mock.url",
};

export const articlesMock = [
  {
    title: "Title 1",
    ...articleMock,
  },
  {
    title: "Title 2",
    ...articleMock,
  },
  {
    title: "Title 3",
    ...articleMock,
  },
];
