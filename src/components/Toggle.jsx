import PropTypes from "prop-types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function Toggle({ option, setOption, options }) {
  return (
    <div className="flex py-8">
      <ToggleGroup
        type="single"
        variant="outline"
        value={option}
        onValueChange={setOption}
      >
        {options.map((cat) => (
          <ToggleGroupItem key={cat} value={cat}>
            {cat.toUpperCase()}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}

Toggle.propTypes = {
  option: PropTypes.string.isRequired,
  setOption: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Toggle;
