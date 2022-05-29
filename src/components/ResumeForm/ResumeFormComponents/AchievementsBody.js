import { Button, Container, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAchievements } from "../../../features/setResumeSlice";

export const AchievementsBody = ({ step, setStep }) => {
  const dispatch = useDispatch();

  const [Info, setInfo] = useState("");

  const nextStep = () => {
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
        <TextField
          label="Achievements"
          variant="filled"
          color="primary"
          fullWidth
          focused
          value={Info}
          onChange={(e) => setInfo(e.target.value)}
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
      </Container>
    </div>
  );
};
