import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { intiateData } from "../store/falcone.actionCreators";
import { useAppDispatch } from "../store/storeConfig";
import { selectedValuesType } from "../types";

export const Result = () => {
  const { selectedValues, results } = useSelector((state: any) => state);
  const [totalTime, setTotalTime] = useState<number>(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let sumTime = 0;
    selectedValues.forEach((it: selectedValuesType) => {
      sumTime = sumTime + it.timeTaken;
    });
    setTotalTime(sumTime);
  }, [selectedValues]);
  console.log(results);

  const handletryAgain = () => {
    dispatch(intiateData());
  };

  return (
    <>
      {results.status === "success" ? (
        <CardContent>
          <Typography color="textSecondary">
            {
              "Success! Congratulations on Finding Falcone. King Shan is mighty pleased."
            }
          </Typography>
          <br />
          <Typography color="textSecondary" gutterBottom>
            {" "}
            Time Taken{" "}
          </Typography>
          <Typography variant="h5" component="h3">
            {" "}
            {totalTime}{" "}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {" "}
            Planet found{" "}
          </Typography>
          <Typography variant="h5" component="h3">
            {results.planet_name}
          </Typography>
        </CardContent>
      ) : (
        <CardContent>
          <Typography color="textSecondary">
            {"Falcone is not found! Please try again."}
          </Typography>
        </CardContent>
      )}
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="primary"
          className="button tryAgainButton"
          onClick={handletryAgain}
        >
          Start Again
        </Button>
      </CardActions>
    </>
  );
};
