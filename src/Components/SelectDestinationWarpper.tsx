import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import {
  getPlanetDetails,
  getVehicleDetails
} from "../store/falcone.actionCreators";
import { SelectDestination } from "./SelectDestination";

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

  return (
    <>
      <h3>Select planets you want to search in:</h3>
      <Grid container spacing={3}>
        <br />
        <SelectDestination />
      </Grid>
    </>
  );
};
