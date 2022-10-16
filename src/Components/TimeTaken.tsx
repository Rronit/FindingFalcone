import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectedValuesType } from "../types";
import "./falcone.style.css";

export const TimeTaken = () => {
  const { selectedValues } = useSelector((state: any) => state);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const findFalcone = () => {
    console.log("");
  };
  useEffect(() => {
    let sumTime = 0;
    let totalSelected = 0;
    selectedValues.forEach((it: selectedValuesType) => {
      if (it.timeTaken > 0) {
        totalSelected++;
      }
      sumTime = sumTime + it.timeTaken;
    });
    setTotalTime(sumTime);
    setIsDisabled(totalSelected < 4);

    console.log(sumTime, totalSelected);
  }, [selectedValues]);

  return (
    <Grid
      container
      spacing={3}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Time Taken
            </Typography>
            <Typography variant="h5" component="h2">
              {totalTime}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              disabled={isDisabled}
              variant="outlined"
              size="medium"
              color="primary"
              onClick={findFalcone}
            >
              Find Falcone
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
