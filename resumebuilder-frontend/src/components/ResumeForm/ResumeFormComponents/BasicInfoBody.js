import { Button, Container, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectResume, setBasicInfo } from "../../../features/setResumeSlice";

export const BasicInfoBody = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const resume = useSelector(selectResume);

  useEffect(() => {
    setInfo(resume.basicInfo);
  }, []);

  const [Info, setInfo] = useState({
    fullname: "",
    mno: "",
    title: "",
    email: "",
    linked: "",
    about: "",
  });
  const onInputChange = (e) => {
    setInfo({ ...Info, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    dispatch(setBasicInfo(Info));
    if (step != 6) setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="Basic Info">
      <Container>
        <h2>Basic Info</h2>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="fullname"
              label="Full Name"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={resume.basicInfo.fullname}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="mno"
              label="Mobile No."
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={resume.basicInfo.mno}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="title"
              label="Title (e.g. Web Developer)"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={resume.basicInfo.title}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email ID"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={resume.basicInfo.email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="linked"
              label="LinkedIn Link"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={resume.basicInfo.linked}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="about"
              label="About"
              variant="filled"
              color="primary"
              fullWidth
              focused
              value={resume.basicInfo.about}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
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
