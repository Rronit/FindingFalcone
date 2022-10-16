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
import { selectedValuesType } from "../types";

export const SelectDestinationWrapper = () => {
  const dispatch = useDispatch();
  const { planetDetails, selectedValues } = useSelector((state: any) => state);
  // useEffect(() => {}, [selectedValues]);
  console.log(selectedValues);

  useEffect(() => {
    getPlanetDetails(dispatch);
    getVehicleDetails(dispatch);
  }, [dispatch]);

  return (
    <>
      <h3>Select planets you want to search in:</h3>
      <Grid
        container
        spacing={3}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {selectedValues.map((item: selectedValuesType, idx: number) => (
          <Paper className="card">
            <SelectDestination idx={idx} selectedVal={item} />
          </Paper>
        ))}
      </Grid>
      <TimeTaken />
    </>
  );
};
