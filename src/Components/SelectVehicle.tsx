import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import { useSelector } from "react-redux";
import { falconePlanet, falconeVehicle, selectedValuesType } from "../types";
import {
  setVehicle,
  updateSelectedValues
} from "../store/falcone.actionCreators";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../store/storeConfig";

export const SelectVehicle = (props: {
  selectedVal: selectedValuesType;
  selectedPlanet: falconePlanet;
  index: number;
}) => {
  const { selectedPlanet, index, selectedVal } = props;
  const dispatch = useAppDispatch();

  const { vehicleDetails, selectedValues } = useSelector((state: any) => state);
  const [vehicleOptions, setVehicleOptions] = useState<falconeVehicle[]>([]);
  // const [vehicle, setVehicle] = React.useState("Select Planet");
  useEffect(() => {
    setVehicleOptions(vehicleDetails);
    console.log(vehicleDetails);
  }, [vehicleDetails]);
  const handleVehicleChange = (e: { target: { value: any } }) => {
    let tempSelected = [...selectedValues];
    let tempVehicle: falconeVehicle[] = [...vehicleDetails];
    const vehiData = vehicleOptions.filter(it => it.name === e.target.value)[0];
    let timeTaken = selectedPlanet.distance / vehiData.speed;
    tempSelected[index] = {
      ...selectedVal,
      ...{ vehicle: e.target.value, timeTaken }
    };
    // setVehicle(e.target.value);
    let ndex = vehicleOptions.findIndex(x => x.name === e.target.value);
    // let ff = tempVehicle.forEach(item => {
    //   if (item.name === e.target.value) {
    //     item.total_no = item.total_no - 1;
    //   }
    //   return item;
    // });
    let x = tempVehicle[ndex].total_no - 1;
    tempVehicle[ndex] = {
      ...vehiData,
      ...{ total_no: x }
    };
    console.log(ndex, tempVehicle);

    dispatch(setVehicle(tempVehicle));

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
            label={`${vehicle.name} (${vehicle.total_no})`}
            disabled={
              vehicle.max_distance < selectedPlanet.distance ||
              vehicle.total_no < 1
            }
          />
        ))}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl>
  );
};
