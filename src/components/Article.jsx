import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Source from "./Source";

import { hoursAgo, getCreator } from "../lib/utils";

function Article({ article }) {
  const {
    article_id: id,
    category,
    creator,
    description,
    link,
    pubDate,
    source_id: sourceId,
    source_icon: sourceIcon,
    source_url: sourceUrl,
    title,
  } = article;

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <Source id={sourceId} icon={sourceIcon} url={sourceUrl} />
        <CardTitle>{title}</CardTitle>
        {category.length > 0 && (
          <Badge key={category + id} className="max-w-min">
            {category}
          </Badge>
        )}
      </CardHeader>
      <a href={link} target="_blank">
        <CardContent className="break-all">{description}</CardContent>
      </a>
      <CardFooter>
        <CardDescription>
          {`${hoursAgo(pubDate)}`}
          <span className="font-semibold">{`${getCreator(creator)}`}</span>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    article_id: PropTypes.string,
    category: PropTypes.array,
    creator: PropTypes.array,
    description: PropTypes.string,
    link: PropTypes.string,
    pubDate: PropTypes.string,
    source_icon: PropTypes.string,
    source_id: PropTypes.string,
    source_url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Article;
