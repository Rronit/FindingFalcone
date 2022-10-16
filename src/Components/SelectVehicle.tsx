import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import { useSelector } from "react-redux";
import { falconePlanet, falconeVehicle } from "../types";
import { updateSelectedValues } from "../store/falcone.actionCreators";
import { useDispatch } from "react-redux";

export const SelectVehicle = (props: {
  selectedPlanet: falconePlanet;
  index: number;
}) => {
  const { selectedPlanet, index } = props;
  const dispatch = useDispatch();

  const { vehicleDetails, selectedValues } = useSelector((state: any) => state);
  const [vehicleOptions, setVehicleOptions] = useState<falconeVehicle[]>([]);
  const [vehicle, setVehicle] = React.useState("Select Planet");
  useEffect(() => {
    setVehicleOptions(vehicleDetails);
  }, [vehicleDetails]);
  const handleVehicleChange = (e: { target: { value: any } }) => {
    let tempSelected = [...selectedValues];
    let vehiData = vehicleOptions.filter(it => it.name === e.target.value)[0];
    let timeTaken = selectedPlanet.distance / vehiData.speed;
    tempSelected[index] = {
      ...tempSelected[index],
      ...{ vehicle: e.target.value, timeTaken }
    };
    setVehicle(e.target.value);

    updateSelectedValues(tempSelected, dispatch);
  };
  // const selectedVehicle = () =>
  //   vehicleOptions.filter(it => it.name === vehicle)[0];

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Vehicle</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={handleVehicleChange}
      >
        {/* <MenuItem value={"Select Vehicle"}>Select Vehicle</MenuItem> */}
        {vehicleOptions.map(vehicle => (
          <FormControlLabel
            value={vehicle.name}
            control={<Radio />}
            label={vehicle.name}
            disabled={vehicle.max_distance < selectedPlanet.distance}
          />
        ))}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl>
  );
};
