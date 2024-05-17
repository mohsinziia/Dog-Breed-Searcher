import React, { useState, useMemo } from "react";
import { data } from "../data/breedNames";

function Select({ value, onChange, ...props }, ref) {
  const [breeds, setBreeds] = useState([]);
  useMemo(() => {
    setBreeds(data.breedNames);
  }, [data.breedNames]);
  return (
    <>
      <select
        value={value}
        onChange={(event) => {
          onChange(event);
        }}
        ref={ref}
      >
        {breeds.map((breedName) => (
          <option key={breedName} value={breedName}>
            {breedName}
          </option>
        ))}
      </select>
    </>
  );
}

export default React.forwardRef(Select);
