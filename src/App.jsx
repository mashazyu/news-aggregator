import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import Articles from "./components/Articles";
import Toggle from "./components/Toggle";

import { CATEGORIES } from "./constants";

function App() {
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0]);
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setQuery("");
  };

  return (
    <main className="container mx-auto py-8">
      <Input
        value={query}
        onChange={handleInputChange}
        placeholder="Filter your news"
      />
      <Toggle
        option={currentCategory}
        setOption={handleCategoryChange}
        options={CATEGORIES}
      />
      <Separator />
      <Articles category={currentCategory} query={query} />
    </main>
  );
}

export default App;
