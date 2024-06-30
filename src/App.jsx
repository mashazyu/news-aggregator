import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import Articles from "./components/Articles";
import Toggle from "./components/Toggle";
import Selector from "./components/Selector";

import { CATEGORIES, LANGUAGE_OPTIONS } from "./constants";

function App() {
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0]);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setQuery("");
  };

  return (
    <main className="container mx-auto py-8">
      <div className="flex flex-col sm:flex-row">
        <Input
          value={query}
          onChange={handleInputChange}
          placeholder="Filter your news"
          className="mb-5 sm:mr-5"
        />
        <Selector
          options={LANGUAGE_OPTIONS}
          placeholder="Select language..."
          value={language}
          setValue={setLanguage}
        />
      </div>

      <Toggle
        option={currentCategory}
        setOption={handleCategoryChange}
        options={CATEGORIES}
      />
      <Separator />
      <Articles category={currentCategory} query={query} language={language} />
    </main>
  );
}

export default App;
