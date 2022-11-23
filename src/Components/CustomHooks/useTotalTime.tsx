import { useEffect, useState } from "react";
import { selectedValuesType } from "../../types";

export const useTotalTime = (selectedValues: any) => {
  const [totalTime, setTotalTime] = useState<number>(0);
  useEffect(() => {
    let sumTime = 0;
    selectedValues.forEach((it: selectedValuesType) => {
      sumTime = sumTime + it.timeTaken;
    });
    setTotalTime(sumTime);
  }, [selectedValues]);

  return { totalTime };
};
