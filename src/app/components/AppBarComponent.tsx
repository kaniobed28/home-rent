import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";

const AppBarComponent = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <HomeIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RENTIT
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
