import PropTypes from "prop-types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardDescription } from "./ui/card";

function Source({ id, icon, url }) {
  if (!id) return null;

  return (
    <a href={url} target="_blank" className="hover:underline ">
      <div className="flex">
        {icon && (
          <Avatar className="w-5 h-5 mr-2 rounded-none">
            <AvatarImage src={icon} className="" />
          </Avatar>
        )}
        <CardDescription>{id}</CardDescription>
      </div>
    </a>
  );
}

Source.propTypes = {
  icon: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string,
};

export default Source;
