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
import CustomImage from "./CustomImage";
import ImageFallback from "./ImageFallback";

import {
  timeAgo,
  isCreatorAvailable,
  getCreator,
  limitChars,
} from "../lib/utils";

const Article = ({ article }) => {
  const {
    creator,
    description,
    image_url: imageUrl,
    keywords,
    link,
    pubDate,
    source_id: sourceId,
    source_icon: sourceIcon,
    source_url: sourceUrl,
    title,
  } = article;

  return (
    <Card className="flex flex-col justify-between">
      <CustomImage
        src={imageUrl}
        alt={title}
        FallbackComponent={ImageFallback}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />

      <CardHeader>
        <Source id={sourceId} icon={sourceIcon} url={sourceUrl} />
        <CardTitle>{title}</CardTitle>
        {keywords?.length > 0 && (
          <div className="flex flex-row flex-wrap">
            {keywords.map((keyword, i) => {
              return (
                <Badge
                  key={keyword + i}
                  className="max-w-min whitespace-nowrap mr-2"
                >
                  {keyword}
                </Badge>
              );
            })}
          </div>
        )}
      </CardHeader>

      <a href={link} target="_blank">
        <CardContent className="break-all">
          {limitChars(description)}
        </CardContent>
      </a>

      <CardFooter>
        <CardDescription>
          {`${timeAgo(pubDate)}`}
          {isCreatorAvailable(creator) && (
            <>
              by <span className="font-semibold">{getCreator(creator)}</span>
            </>
          )}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    creator: PropTypes.array,
    description: PropTypes.string,
    image_url: PropTypes.string,
    keywords: PropTypes.array,
    link: PropTypes.string,
    pubDate: PropTypes.string,
    source_icon: PropTypes.string,
    source_id: PropTypes.string,
    source_url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Article;
