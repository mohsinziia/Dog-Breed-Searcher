import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBreedData } from "../store/breedSlice";
import Select from "./Select";

function Form() {
  const [breedOption, setBreedOption] = useState("germanshepherd");
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  async function getObjectURL(fetchURL) {
    try {
      const responseJSON = await fetch(fetchURL);
      const responseParsed = await responseJSON?.json();
      const url = responseParsed?.message;
      return url;
    } catch (error) {
      console.log("Error while fetching: ", error);
    }
    return undefined;
  }

  const submit = async (data, e) => {
    const fetchURL = `https://dog.ceo/api/breed/${data.breedName}/images/random`;

    const url = await getObjectURL(fetchURL);
    const breedInfo = {
      breedData: {
        name: data.breedName,
        imageURL: url,
      },
    };
    dispatch(addBreedData(breedInfo));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setBreedOption(newValue);
    setValue("breedName", newValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={`mb-4`}>
        <label htmlFor="breedInput" className="mr-4">
          Breed Name
        </label>
        <Select
          className={``}
          {...register("breedName")}
          value={breedOption}
          onChange={(e) => {
            handleChange(e);
          }}
          id="breedInput"
        />
        <button className={`submitBtn w-28 ml-5 p-2  rounded-md`} type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default Form;
