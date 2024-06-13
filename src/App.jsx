import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const ARTICLES = [
  {
    source: {
      id: null,
      name: "[Removed]",
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urlToImage: null,
    publishedAt: "1970-01-01T00:00:00Z",
    content: "[Removed]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: "Yahoo Finance",
    title:
      "GameStop stock soars as 'Roaring Kitty' announces livestream, reveals $382 million unrealized gain - Yahoo Finance",
    description: null,
    url: "https://news.google.com/rss/articles/CBMijAFodHRwczovL2ZpbmFuY2UueWFob28uY29tL25ld3MvZ2FtZXN0b3Atc3RvY2stc29hcnMtYXMtcm9hcmluZy1raXR0eS1hbm5vdW5jZXMtbGl2ZXN0cmVhbS1yZXZlYWxzLTM4Mi1taWxsaW9uLXVucmVhbGl6ZWQtZ2Fpbi0yMDA4MDQwMjguaHRtbNIBAA?oc=5",
    urlToImage: null,
    publishedAt: "2024-06-07T08:38:47Z",
    content: null,
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: "Fortune",
    title:
      "Robinhood buys crypto exchange Bitstamp in surprise $200 million deal - Fortune",
    description: null,
    url: "https://news.google.com/rss/articles/CBMiUGh0dHBzOi8vZm9ydHVuZS5jb20vY3J5cHRvLzIwMjQvMDYvMDYvcm9iaW5ob29kLWJpdHN0YW1wLWNyeXB0by1kZWFsLTIwMG1pbGxpb24v0gEA?oc=5",
    urlToImage: null,
    publishedAt: "2024-06-07T08:10:56Z",
    content: null,
  },
];

function App() {
  const articlesQuery = useQuery({
    queryKey: ["articles"],
    queryFn: () => Promise.resolve([...ARTICLES]),
  });

  const { isLoading, isError, error } = articlesQuery;

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <>
      <Button>Click me</Button>
    </>
  );
}

export default App;
