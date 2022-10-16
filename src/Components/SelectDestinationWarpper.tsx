import { Grid, Paper, Typography } from "@mui/material";
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

  useEffect(() => {
    getPlanetDetails(dispatch);
    getVehicleDetails(dispatch);
  }, [dispatch]);

  return (
    <>
      {!results.status ? (
        <>
          <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
            Select planets you want to search in:
          </Typography>
          <br />
          <Grid
            container
            spacing={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {selectedValues.map((item: selectedValuesType, idx: number) => (
              <Paper className="card" key={idx}>
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
