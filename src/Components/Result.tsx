import { CardContent, Typography } from "@mui/material";

export const Result = () => {
  return (
    <CardContent>
      <Typography color="textSecondary">{"successMsg"}</Typography>
      <br />
      <Typography color="textSecondary" gutterBottom>
        {" "}
        Time Taken{" "}
      </Typography>
      <Typography variant="h5" component="h3">
        {" "}
        {"this.props.history.location.state.timetaken"}{" "}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {" "}
        Planet found{" "}
      </Typography>
      <Typography variant="h5" component="h3">
        {"planet"}
      </Typography>
    </CardContent>
  );
};
