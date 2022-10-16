import { Grid, Paper } from "@mui/material";
import "./falcone.style.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getPlanetDetails,
  getVehicleDetails
} from "../store/falcone.actionCreators";
import { SelectDestination } from "./SelectDestination";
import { TimeTaken } from "./TimeTaken";

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
      <Grid container spacing={3} className="keepCenter">
        <Paper className="card">
          <SelectDestination />
        </Paper>
        <Paper className="card">
          <SelectDestination />
        </Paper>
      </Grid>
      <TimeTaken />
    </>
  );
};
