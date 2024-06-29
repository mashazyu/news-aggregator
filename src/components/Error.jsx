import PropTypes from "prop-types";

const Error = ({ message }) => {
  return (
    <div className="pt-16">
      <p role="alert" className="error-message text-sm text-red-500 mt-1">
        Error: {message}
      </p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
