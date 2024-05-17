import React from "react";
import { useSelector } from "react-redux";

function BreedInfo() {
  const breedData = useSelector((state) => state.breed.breedData);
  const { name } = breedData;
  const { imageURL } = breedData;

  return (
    <>
      <h2>Breed Name:</h2>
      <p>{name}</p>
      <img width={200} src={imageURL} alt="Breed Picture" />
    </>
  );
}

export default BreedInfo;
