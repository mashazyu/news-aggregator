import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Fallback = ({ text = "" }) => {
  return (
    <div className="w-full h-[200px] bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-500">
      {text}
    </div>
  );
};

Fallback.propTypes = {
  text: PropTypes.string,
};

const ArticleImage = (props) => {
  const { src, alt, ...rest } = props;
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
    };
    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);

  if (error || !src) return <Fallback text="No image available" />;

  return isLoaded ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      {...rest}
      onError={() => setError(true)}
    />
  ) : (
    <Fallback />
  );
};

ArticleImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default ArticleImage;
