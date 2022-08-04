import { Button, Container, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectResume, setExperience } from "../../../features/setResumeSlice";

export const ExperienceBody = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const resume = useSelector(selectResume);

  useEffect(() => {
    setInfo(resume.experience);
  }, []);

  const [Info, setInfo] = useState({
    jobTitle: "",
    cmpName: "",
    sDate: "",
    eDate: "",
    jobDsp: "",
  });
  const onInputChange = (e) => {
    setInfo({ ...Info, [e.target.name]: e.target.value });
  };
  const nextStep = () => {
    dispatch(setExperience(Info));
    if (step != 6) setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="workExp">
      <Container>
        <h2>Work Experience</h2>
        <br />

        {/* <Button
              variant="outlined"
              color="primary"
              onClick={() => setTotalExp(totalExp + 1)}
            >
              + Add Experience
            </Button> 
            <br />*/}
        <br />

        <Grid container spacing={3}>
          {/* row 1  */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="jobTitle"
              label="Job Title"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.jobTitle}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="cmpName"
              label="Company Name"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.cmpName}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="sDate"
              label="Start Date (e.g. may-2020)"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.sDate}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="eDate"
              label="End Date (e.g. may-2021 or Present)"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.eDate}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="jobDsp"
              label="Job Description"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={Info.jobDsp}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <br />
        <Button variant="outlined" color="primary" disabled>
          + Add Experience
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
