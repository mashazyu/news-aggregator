import PropTypes from "prop-types";

const ImageFallback = ({ text = "" }) => {
  return (
    <div className="w-full h-[200px] bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-500">
      {text}
    </div>
  );
};

ImageFallback.propTypes = {
  text: PropTypes.string,
};

export default ImageFallback;
