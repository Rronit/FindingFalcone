import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { falconePlanet, selectedValuesType } from "../../types";

export const useDestinationOption = () => {
  const { planetDetails, selectedValues } = useSelector((state: any) => state);
  const [destinationOptions, setDesinationOptions] = useState<falconePlanet[]>(
    []
  );
  useEffect(() => {
    const filteredData = planetDetails.filter((pl: falconePlanet) =>
      selectedValues.some((item: selectedValuesType) => item.planet !== pl.name)
    );
    setDesinationOptions(filteredData);
  }, [planetDetails, selectedValues]);
  return { destinationOptions };
};
