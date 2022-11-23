import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateSelectedValues } from "../store/falcone.actionCreators";
import { selectedValuesType } from "../types";
import { SelectVehicle } from "./SelectVehicle";
import "./falcone.style.css";
import { useDestinationOption } from "./CustomHooks/useDestinationOption";

export const SelectDestination = (props: {
  selectedVal: selectedValuesType;
  idx: number;
}) => {
  const dispatch = useDispatch();
  const { idx, selectedVal } = props;

  const [planet, setPlanet] = React.useState("Select Planet");
  const { selectedValues } = useSelector((state: any) => state);
  const { destinationOptions } = useDestinationOption();

  const checkAvailability = (sel: any) => {
    return (
      selectedValues.filter((it: selectedValuesType) => it.planet === sel)
        .length > 0
    );
  };

  const handleDestinationChange = (e: { target: { value: any } }) => {
    setPlanet(e.target.value);
    let tempSelected = [...selectedValues];
    tempSelected[idx] = { ...selectedVal, ...{ planet: e.target.value } };
    updateSelectedValues(tempSelected, dispatch);
  };
  const selectedPlanet = () =>
    destinationOptions.filter(it => it.name === planet)[0];

  return (
    <div className="destination">
      <Box sx={{ minWidth: 120, padding: 4 }}>
        <FormControl>
          <InputLabel id="select-planet">Destination</InputLabel>
          <Select
            labelId="select-planet"
            id="select-desti"
            value={planet}
            label="Destination"
            onChange={handleDestinationChange}
            style={{ width: 150 }}
          >
            <MenuItem value={"Select Planet"}>Select Planet</MenuItem>
            {destinationOptions.map(planet => (
              <MenuItem
                value={planet.name}
                disabled={checkAvailability(planet.name)}
                key={planet.name}
              >
                {planet.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {planet !== "Select Planet" && (
        <SelectVehicle
          selectedPlanet={selectedPlanet()}
          index={idx}
          selectedVal={selectedVal}
        />
      )}
    </div>
  );
};
