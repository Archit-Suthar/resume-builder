import { Button, Container, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectResume,
  setAchievements,
} from "../../../features/setResumeSlice";

export const AchievementsBody = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const resume = useSelector(selectResume);

  useEffect(() => {
    setInfo(resume.achievements);
  }, []);

  const [Info, setInfo] = useState("");

  const nextStep = (e) => {
    e.preventDefault();
    dispatch(setAchievements(Info));
    if (step != 6) setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="achievements">
      <Container>
        <h2>Achievements</h2>
        <br />

        <h3>- Enter a brief introduction about your achievements</h3>
        <br />
        <form onSubmit={nextStep}>
          <TextField
            label="Achievements"
            variant="filled"
            color="primary"
            fullWidth
            focused
            value={Info}
            onChange={(e) => setInfo(e.target.value)}
            required
          />
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
        </form>
      </Container>
    </div>
  );
};
