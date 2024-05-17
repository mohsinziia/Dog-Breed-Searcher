import { configureStore } from "@reduxjs/toolkit";
import breedSlice from "./breedSlice";

const store = configureStore({
  reducer: {
    breed: breedSlice,
  },
});

export default store;
