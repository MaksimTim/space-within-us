import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRover } from "../../models/models";
import {RootState} from "../store";

interface NasaState {
  rovers: IRover[];
}

const initialState: NasaState = {
  rovers: [],
};

const nasaSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addRover: (state, action: PayloadAction<IRover>) => {
      const findItem = state.rovers.find(obj => obj.name === action.payload.name)
      !findItem && state.rovers.push(action.payload);
    },
  },
});

export const { addRover } = nasaSlice.actions;
export default nasaSlice.reducer;
export const selectRover = (state: RootState) => state.nasa.rovers;