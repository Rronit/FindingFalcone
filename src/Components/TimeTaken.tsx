import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import React from "react";
import "./falcone.style.css";

export const TimeTaken = () => {
  const findFalcone = () => {
    console.log("");
  };
  const getTimeTaken = () => 0;
  return (
    <Grid container spacing={3} className="keep-center">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Time Taken
            </Typography>
            <Typography variant="h5" component="h2">
              {getTimeTaken()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              // disabled={}
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
