import { falconePlanet, falconeVehicle, selectedValuesType } from "../types";
// import { SET_PLANET, SET_VEHICLE } from "./falcone.actionType";
// import produce from "immer";
import { createSlice } from "@reduxjs/toolkit";

interface falconeStore {
  planetDetails: falconePlanet[];
  vehicleDetails: falconeVehicle[];
  selectedValues: selectedValuesType[];
}

const initSelectedValues: selectedValuesType[] = [
  {
    planet: "",
    vehicle: "",
    timeTaken: 0
  },
  {
    planet: "",
    vehicle: "",
    timeTaken: 0
  },
  {
    planet: "",
    vehicle: "",
    timeTaken: 0
  },
  {
    planet: "",
    vehicle: "",
    timeTaken: 0
  }
];

export const initialState: falconeStore = {
  planetDetails: [],
  vehicleDetails: [],
  selectedValues: initSelectedValues
};

export const falconeSlice = createSlice({
  name: "falcone",
  initialState,
  reducers: {
    setPlanet(state, action) {
      state.planetDetails = action.payload;
    },
    setVehicle(state, action) {
      state.vehicleDetails = action.payload;
    },
    updateSelectedValues(state, action) {
      state.selectedValues = action.payload;
    }
  }
});

export const falconeActions = falconeSlice.actions;
