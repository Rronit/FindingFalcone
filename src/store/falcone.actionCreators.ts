import axios from "axios";
import { falconePlanet, falconeVehicle } from "../types";
import { falconeActions } from "./falcone.reducers";
const baseURL = "https://findfalcone.herokuapp.com";

export const getPlanetDetails = async (dispatch: any) => {
  const url = `${baseURL}/planets`;
  try {
    const resp = (await axios.get(url)).data;
    dispatch(setPlanet(resp));
  } catch (e) {
    console.error(e);
  }
};

export const getVehicleDetails = async (dispatch: any) => {
  const url = `${baseURL}/vehicles`;
  try {
    const resp = (await axios.get(url)).data;
    dispatch(setVehicle(resp));
  } catch (e) {
    console.error(e);
  }
};

export const updateSelectedValues = (data: any, dispatch: any) => {
  dispatch(falconeActions.updateSelectedValues(data));
};

export const setPlanet = (data: falconePlanet[]) => {
  return async (dispatch: any) => {
    dispatch(falconeActions.setPlanet(data));
  };
};

export const setVehicle = (data: falconeVehicle[]) => {
  return async (dispatch: any) => {
    dispatch(falconeActions.setVehicle(data));
  };
};

export const getResults = async (req: any, dispatch: any) => {
  const urlToken = `${baseURL}/token`;
  const urlFind = `${baseURL}/find`;
  try {
    axios.defaults.headers.common["Accept"] = "application/json";
    const token = (await axios.post(urlToken)).data;
    let reqBody = {
      ...req,
      ...token
    };
    const result = (await axios.post(urlFind, reqBody)).data;
    console.log({ result });
    dispatch(falconeActions.updateResults(result));
  } catch (e) {
    console.error(e);
  }
};
