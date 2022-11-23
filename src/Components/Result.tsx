import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { intiateData } from "../store/falcone.actionCreators";
import { useAppDispatch } from "../store/storeConfig";
import { useTotalTime } from "./CustomHooks/useTotalTime";

export const Result = () => {
  const { selectedValues, results } = useSelector((state: any) => state);
  const dispatch = useAppDispatch();
  const { totalTime } = useTotalTime(selectedValues);

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
