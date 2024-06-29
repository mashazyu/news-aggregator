import PropTypes from "prop-types";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Source from "./Source";

import {
  hoursAgo,
  isCreatorAvailable,
  getCreator,
  limitChars,
} from "../lib/utils";

function Article({ article }) {
  const {
    article_id: id,
    category,
    creator,
    description,
    image_url: imageUrl,
    link,
    pubDate,
    source_id: sourceId,
    source_icon: sourceIcon,
    source_url: sourceUrl,
    title,
  } = article;

  return (
    <Card className="flex flex-col justify-between">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-[200px] bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-500">
          No image available
        </div>
      )}

      <CardHeader>
        <Source id={sourceId} icon={sourceIcon} url={sourceUrl} />
        <CardTitle>{title}</CardTitle>
        {category?.length > 0 && (
          <Badge key={category + id} className="max-w-min">
            {category}
          </Badge>
        )}
      </CardHeader>

      <a href={link} target="_blank">
        <CardContent className="break-all">
          {limitChars(description, 100)}
        </CardContent>
      </a>

      <CardFooter>
        <CardDescription>
          {`${hoursAgo(pubDate)}`}
          {isCreatorAvailable(creator) && (
            <>
              by <span className="font-semibold">{getCreator(creator)}</span>
            </>
          )}
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
    image_url: PropTypes.string,
    link: PropTypes.string,
    pubDate: PropTypes.string,
    source_icon: PropTypes.string,
    source_id: PropTypes.string,
    source_url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Article;
