import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BasicInfoBody } from "./ResumeFormComponents/BasicInfoBody";
import { EducationBody } from "./ResumeFormComponents/EducationBody";
import { ExperienceBody } from "./ResumeFormComponents/ExperienceBody";
import { SkillsBody } from "./ResumeFormComponents/SkillsBody";
import { AchievementsBody } from "./ResumeFormComponents/AchievementsBody";
import { ProjectsBody } from "./ResumeFormComponents/ProjectsBody";

const ResumeForm = () => {
  const [step, setStep] = useState(1);

  return (
    <Container>
      {step === 1 && <BasicInfoBody step={step} setStep={setStep} />}
      {step === 2 && <EducationBody step={step} setStep={setStep} />}
      {step === 3 && <ExperienceBody step={step} setStep={setStep} />}
      {step === 4 && <SkillsBody step={step} setStep={setStep} />}
      {step === 5 && <AchievementsBody step={step} setStep={setStep} />}
      {step === 6 && <ProjectsBody step={step} setStep={setStep} />}
    </Container>
  );
};

export default ResumeForm;
