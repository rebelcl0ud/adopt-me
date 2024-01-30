import { useState } from "react";

// "controlled form", using hook to control parts of the form
const SearchParams = () => {
  const [location, setLocation] = useState("");

  const handleOnChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => handleOnChange(e)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
