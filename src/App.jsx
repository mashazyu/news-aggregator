import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import Articles from "./components/Articles";
import Toggle from "./components/Toggle";

import { CATEGORIES } from "./constants";

function App() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <main className="container mx-auto py-8">
      <Input
        value={query}
        onChange={handleChange}
        placeholder="Filter your news"
      />
      <Toggle category={category} setCategory={setCategory} />
      <Separator />
      <Articles category={category} query={query} />
    </main>
  );
}

export default App;
