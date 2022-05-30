import { Button, Container, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectResume, setEducation } from "../../../features/setResumeSlice";

export const EducationBody = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const resume = useSelector(selectResume);

  const [Info, setInfo] = useState({
    institute: "",
    state: "",
    degree: "",
    studyField: "",
    year: "",
    percent: "",
  });

  useEffect(() => {
    setInfo(resume.education);
  }, []);

  const onInputChange = (e) => {
    setInfo({ ...Info, [e.target.name]: e.target.value });
  };
  const nextStep = () => {
    dispatch(setEducation(Info));
    if (step != 6) setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="education">
      <Container>
        <h2>Education</h2>
        <br />
        <Grid container spacing={3}>
          {/* row 1  */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="institute"
              label="Institute Name"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.institute}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="state"
              label="State"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.state}
              onChange={onInputChange}
            />
          </Grid>

          {/* row 2  */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="degree"
              label="Degree"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.degree}
              onChange={onInputChange}
            />
          </Grid>
          {/* row 3  */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="studyField"
              label="Field Of Study"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.studyField}
              onChange={onInputChange}
            />
          </Grid>
          {/* row 4  */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="year"
              label="Year (e.g. 2019-23 or 2029-present)"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.year}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="percent"
              label="Percentage"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.percent}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <br />
        <Button variant="outlined" color="primary" disabled>
          + Add Education
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
