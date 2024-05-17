import React, { useState, useMemo } from "react";
import { data } from "../data/breedNames";

function Input({ value, onChange, ...props }, ref) {
  const [breeds, setBreeds] = useState([]);
  useMemo(() => {
    setBreeds(data.breedNames);
  }, [data.breedNames]);
  return (
    <>
      {/* <input type={type} placeholder={placeholder} {...props} />; */}
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

export default React.forwardRef(Input);
