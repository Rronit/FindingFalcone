import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import {
  getPlanetDetails,
  getVehicleDetails
} from "../store/falcone.actionCreators";

export const SelectDestinationWrapper = () => {
  const dispatch = useDispatch();
  const planetDetails = useSelector((state: any) => state.planetDetails);
  useEffect(() => {
    console.log(planetDetails);
  }, [planetDetails]);

  useEffect(() => {
    getPlanetDetails(dispatch);
    getVehicleDetails(dispatch);
  }, [dispatch]);

  return <>hello</>;
};
