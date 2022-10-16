import { falconePlanet, falconeVehicle, selectedValues } from "../types";
// import { SET_PLANET, SET_VEHICLE } from "./falcone.actionType";
// import produce from "immer";
import { createSlice } from "@reduxjs/toolkit";

interface falconeStore {
  planetDetails: falconePlanet[];
  vehicleDetails: falconeVehicle[];
  selectedValues: selectedValues[];
}

export const initialState: falconeStore = {
  planetDetails: [],
  vehicleDetails: [],
  selectedValues: []
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

// export const falconeReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case SET_PLANET: {
//       const nextState = produce(state, draftState => {
//         draftState.planetDetails = action.payload;
//       });
//       return nextState;
//     }
//   }
// };
