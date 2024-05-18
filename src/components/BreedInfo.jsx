import React from "react";
import { useSelector } from "react-redux";

function BreedInfo({ className }) {
  const breedData = useSelector((state) => state.breed.breedData);
  const { name } = breedData;
  const { imageURL } = breedData;

  return (
    <div style={{ width: "30rem" }} className={`${className}`}>
      <h2>Breed Name:</h2>
      <p>{name}</p>
      {imageURL && (
        <img
          style={{
            width: "20rem",
            height: "20rem",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          src={imageURL}
          alt="Breed Picture"
        />
      )}
    </div>
  );
}

export default BreedInfo;
