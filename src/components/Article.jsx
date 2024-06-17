import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

function Article({ article }) {
  const { author, title, description, url } = article;

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {author && <CardDescription>by {author}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary">
          <a href={url} target="_blank">
            Learn more
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Article;
