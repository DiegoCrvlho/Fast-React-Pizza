import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);

    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        // TASK
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all placeholder:text-stone-600 focus:bg-yellow-100 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
