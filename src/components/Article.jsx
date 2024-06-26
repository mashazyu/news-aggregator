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
import { Badge } from "@/components/ui/badge";

import { isCreatorAvailable } from "../lib/utils";

function Article({ article }) {
  const {
    article_id: id,
    category,
    creator,
    description,
    link,
    title,
  } = article;

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {isCreatorAvailable(creator) && (
          <CardDescription>by {creator[0]}</CardDescription>
        )}
        {category.length > 0 && (
          <Badge key={category + id} className="max-w-min">
            {category}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="break-all">{description}</CardContent>
      <CardFooter>
        <Button asChild variant="secondary">
          <a href={link} target="_blank">
            Learn more
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    article_id: PropTypes.string,
    category: PropTypes.array,
    creator: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Article;
