import React from "react";
import "./topSection.css";
import { Container, Grid, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      {/* TEXT  */}
      <Container style={{ textAlign: "center" }}>
        <h1>BUILD YOUR RESUME BY JUST FILLING SOME DETAILS</h1>
        <h2>FOR FREE ! </h2>
      </Container>
      {/* IMAGE  */}
      <Container
        maxWidth="md"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img src="./assets/imageResumePC.svg" width="80%" />
      </Container>
      <Container>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          SOME OF THE EXAMPLE RESUMES
        </Typography>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <div className="imgDiv">
              <img src="./assets/resumeDemo1.png" width="240px" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="imgDiv">
              <img src="./assets/resumeDemo2.jfif" width="240px" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="imgDiv">
              <img src="./assets/resumeDemo1.png" width="240px" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="imgDiv">
              <img src="./assets/resumeDemo2.jfif" width="240px" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
