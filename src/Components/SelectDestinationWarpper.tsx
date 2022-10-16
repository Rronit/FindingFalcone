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
import { Result } from "./Result";

export const SelectDestinationWrapper = () => {
  const dispatch = useDispatch();
  const { results, selectedValues } = useSelector((state: any) => state);
  // useEffect(() => {}, [selectedValues]);
  console.log(results);

  useEffect(() => {
    getPlanetDetails(dispatch);
    getVehicleDetails(dispatch);
  }, [dispatch]);

  return (
    <>
      {!results.status ? (
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
      ) : (
        <Result />
      )}
    </>
  );
};
