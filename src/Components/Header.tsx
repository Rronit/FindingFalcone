import { Button, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <Toolbar>
      <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
        Finding Falcone!
      </Typography>
      <div>
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </Toolbar>
  );
};
