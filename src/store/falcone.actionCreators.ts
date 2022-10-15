import axios from "axios";
import { falconeActions } from "./falcone.reducers";
const baseURL = "https://findfalcone.herokuapp.com";

export const getPlanetDetails = async (dispatch: any) => {
  const url = `${baseURL}/planets`;
  try {
    let resp = (await axios.get(url)).data;
    dispatch(setPlanet(resp));
  } catch (e) {
    console.error(e);
  }
};

export const getVehicleDetails = async (dispatch: any) => {
  const url = `${baseURL}/vehicles`;
  try {
    let resp = (await axios.get(url)).data;
    dispatch(setPlanet(resp));
  } catch (e) {
    console.error(e);
  }
};

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
