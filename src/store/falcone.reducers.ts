import { falconePlanet, falconeVehicle } from "../types";
// import { SET_PLANET, SET_VEHICLE } from "./falcone.actionType";
// import produce from "immer";
import { createSlice } from "@reduxjs/toolkit";

interface falconeStore {
  planetDetails: falconePlanet[];
  vehicleDetails: falconeVehicle[];
}

export const initialState: falconeStore = {
  planetDetails: [],
  vehicleDetails: []
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
