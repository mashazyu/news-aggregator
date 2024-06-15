import PropTypes from "prop-types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { CATEGORIES } from "../constants";

function CategoryToggle({ category, setCategory }) {
  return (
    <div className="flex py-8">
      <ToggleGroup
        type="single"
        variant="outline"
        value={category}
        onValueChange={setCategory}
      >
        {CATEGORIES.map((cat) => (
          <ToggleGroupItem key={cat} value={cat}>
            {cat.toUpperCase()}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}

CategoryToggle.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func,
};

export default CategoryToggle;
