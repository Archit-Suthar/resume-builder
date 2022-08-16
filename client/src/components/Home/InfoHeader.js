import React from "react";
import "./topSection.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={24}
          >
            <Grid item>
              <Typography variant="h5" type="title" color="inherit">
                ResumeBuilder
              </Typography>
            </Grid>

            <Grid item>
              <Button variant="outlined" color="inherit" href="#ResumeForm">
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
