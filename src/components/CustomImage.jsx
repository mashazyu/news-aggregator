import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const CustomImage = (props) => {
  const { src, alt, FallbackComponent, ...rest } = props;
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

  if (error || !src) return <FallbackComponent text="No image available" />;

  return isLoaded ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      {...rest}
      onError={() => setError(true)}
    />
  ) : (
    <FallbackComponent />
  );
};

CustomImage.propTypes = {
  alt: PropTypes.string,
  FallbackComponent: PropTypes.func,
  src: PropTypes.string,
};

export default CustomImage;
