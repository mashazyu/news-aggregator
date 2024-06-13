import { useQuery } from "@tanstack/react-query";

import Article from "./components/Article";

const ARTICLES = [
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
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Lim Hui Jie",
    title:
      "Asia markets mixed as Japan spending data misses estimates, China's May exports top expectations - CNBC",
    description:
      "China's May exports beat expectations, climbing 7.6% against the 6% expected by a Reuters poll of economists and vastly higher than the 1.5% rise seen in April.",
    url: "https://www.cnbc.com/2024/06/07/asia-markets-live.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107290834-1692808192061-gettyimages-1619309256-fc_1099083.jpeg?v=1694043910&w=1920&h=1080",
    publishedAt: "2024-06-07T07:58:00Z",
    content:
      "A view of the automated container port in Qingdao in east China's Shandong province. \r\nAsia-Pacific stocks were mixed on Friday as investors looked at economic data from China and digested Japan's ho… [+2389 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Sam Meredith",
    title:
      "Credit Suisse bondholders sue Switzerland in the U.S. over $17 billion writedown of AT1 debt - CNBC",
    description:
      "A group of Credit Suisse bondholders have filed a lawsuit over the Swiss government's decision to write down the failed bank's Additional Tier 1 debt.",
    url: "https://www.cnbc.com/2024/06/07/credit-suisse-bondholders-sue-switzerland-over-17-billion-at1-wipeout.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107215099-1679694376490-gettyimages-1249282050-AFP_33BZ7HC.jpeg?v=1717740943&w=1920&h=1080",
    publishedAt: "2024-06-07T07:23:32Z",
    content:
      "A group of Credit Suisse bondholders filed a lawsuit against the Swiss government, seeking full compensation over the contentious decision to write down the failed bank's Additional Tier 1 (AT1) debt… [+2061 chars]",
  },
];

function App() {
  const articlesQuery = useQuery({
    queryKey: ["articles"],
    queryFn: () => Promise.resolve([...ARTICLES]),
  });

  const { data: articles, isLoading, isError, error } = articlesQuery;

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-3 gap-8">
        {articles.map((article) => (
          <Article article={article} key={article.title} />
        ))}
      </div>
    </main>
  );
}

export default App;
