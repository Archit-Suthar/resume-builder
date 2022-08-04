import { Button, Container, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectResume, setProjects } from "../../../features/setResumeSlice";

export const ProjectsBody = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const resume = useSelector(selectResume);

  useEffect(() => {
    setInfo(resume.projects);
  }, []);

  const [Info, setInfo] = useState({
    projTitle: "",
    projURL: "",
    projDsp: "",
  });
  const onInputChange = (e) => {
    setInfo({ ...Info, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    dispatch(setProjects(Info));
    if (step != 6) setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="projects">
      <Container>
        <h2>Projects</h2>
        <br />
        <Grid container spacing={3}>
          {/* row 1  */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="projTitle"
              label="Project Title"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.projTitle}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="projURL"
              label="Project URL"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.projURL}
              onChange={onInputChange}
            />
          </Grid>

          {/* row 2  */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="projDsp"
              label="Project Description"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.projDsp}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <br />
        <Button variant="outlined" color="primary" disabled>
          + Add Projects
        </Button>
        <br />
        <br />
        <div className="floater">
          <Button
            variant="contained"
            color="primary"
            onClick={backStep}
            disabled={step <= 1}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={nextStep}
            disabled={step >= 7}
          >
            {step < 6 ? "Save & Next" : "Save & Finish"}
          </Button>
        </div>
      </Container>
    </div>
  );
};
