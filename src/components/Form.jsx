import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBreedData } from "../store/breedSlice";
import Input from "./Input";

function Form() {
  const [breedOption, setBreedOption] = useState("germanshepherd");
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const submit = async (data, e) => {
    // const fetchURL = `https://dog.ceo/api/breeds/list/all`;
    let imageURL;
    let url;
    const fetchURL = `https://dog.ceo/api/breed/${data.breedName}/images/random`;
    try {
      const response = await fetch(fetchURL);
      if (response) {
        console.log("Response exists, turning it into a blob...");
        const blob = await response.blob();
        if (blob) {
          console.log("Blob exists, turning it into a URL...");
          imageURL = URL.createObjectURL(blob);
        }
        const res = await fetch(imageURL);
        url = (await res.json()).message;
        console.log(url);
      }
    } catch (error) {
      console.log("Error while fetching");
    }
    const breedInfo = {
      breedData: {
        name: data.breedName,
        imageURL: url,
      },
    };
    dispatch(addBreedData(breedInfo));
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    e.preventDefault();
    setBreedOption(newValue);
    console.log(newValue);
    setValue("breedName", newValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="breedInput">Breed Name</label>
        <Input
          {...register("breedName")}
          value={breedOption}
          onChange={(e) => {
            handleChange(e);
          }}
          id="breedInput"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default Form;
