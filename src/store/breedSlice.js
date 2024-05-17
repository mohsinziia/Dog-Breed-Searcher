import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breedData: {
    name: "Sample text",
    imageURL: "",
  },
};

const breedSlice = createSlice({
  name: "breed",
  initialState: initialState,
  reducers: {
    addBreedData(state, action) {
      state.breedData = action.payload.breedData;
    },
    removeBreedData(state, action) {
      state.breedData = "";
    },
  },
});

export const { addBreedData, removeBreedData } = breedSlice.actions;
export default breedSlice.reducer;
