import { Button, Container, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectResume, setSkills } from "../../../features/setResumeSlice";

export const SkillsBody = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const resume = useSelector(selectResume);

  useEffect(() => {
    setInfo(resume.skills);
  }, []);

  const [input, setInput] = useState("");
  const [Info, setInfo] = useState(["react"]);

  const nextStep = () => {
    dispatch(setSkills(Info));
    if (step != 6) setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };

  const handleAddSkill = () => {
    setInfo([...Info, input]);
    setInput("");
  };

  return (
    <div className="skills">
      <Container>
        <h2>Skill</h2>
        <Container>
          {Info.map((skill, index) => (
            <div
              key={`${skill}${index}`}
              style={{
                backgroundColor: "#F1F5F8",
                padding: "8px 13px",
                borderRadius: "12px",
                display: "inline-block",
                fontWeight: "bold",
                margin: "5px",
              }}
            >
              <span
                style={{
                  marginRight: "3px",
                  fontSize: "20px",
                  alignContent: "center",
                }}
              >
                {skill}
              </span>
              <Button
                onClick={() => {
                  setInfo(Info.filter((s) => s !== skill));
                }}
              >
                x
              </Button>
            </div>
          ))}
        </Container>
        <TextField
          label="Enter Skill"
          variant="filled"
          color="primary"
          fullWidth
          focused
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <br />
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddSkill}
          disabled={input.length === 0}
        >
          + Add Skill
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
