import { falconeActions } from "./falcone.reducers";

export const getPlanetDetails = () => {};

export const setPlanet = (data: any) => {
  return async (dispatch: any) => {
    dispatch(falconeActions.setPlanet(data));
  };
};

export const setVehicle = (data: any) => {
  return async (dispatch: any) => {
    dispatch(falconeActions.setVehicle(data));
  };
};
