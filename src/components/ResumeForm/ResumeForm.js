import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  BasicInfoBody,
  EducationBody,
  WorkExpBody,
  SkillsBody,
  AchievementsBody,
  ProjectsBody,
} from "./ResumeFormComponents";

const ResumeForm = ({ resume, setResume }) => {
  const [step, setStep] = useState(1);

  const [basicInfo, setbasicInfo] = useState({
    fullname: "",
    mno: "",
    title: "",
    email: "",
    linked: "",
    about: "",
  });
  const [education, setEducation] = useState({
    institute: "",
    state: "",
    degree: "",
    studyField: "",
    year: "",
    percent: "",
  });
  const [experience, setExperience] = useState({
    jobTitle: "",
    cmpName: "",
    sDate: "",
    eDate: "",
    jobDsp: "",
  });
  const [skills, setSkills] = useState(["react", "java", "javascript", "HTML"]);
  const [achievements, setAchievements] = useState("");

  const [project, setProject] = useState({
    projTitle: "",
    projURL: "",
    projDsp: "",
  });
  const sections = [
    "basicInfo",
    "education",
    "experience",
    "skills",
    "achievements",
    "projects",
  ];

  const nextStep = () => {
    setResume({
      basicInfo: basicInfo,
      education: education,
      experience: experience,
      skills: skills,
      achievements: achievements,
      projects: project,
    });
    if (step != 6) setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };
  return (
    <div id="ResumeForm">
      <Container>
        {step === 1 && (
          <BasicInfoBody basicInfo={basicInfo} setbasicInfo={setbasicInfo} />
        )}
        {step === 2 && (
          <EducationBody education={education} setEducation={setEducation} />
        )}
        {step === 3 && (
          <WorkExpBody experience={experience} setExperience={setExperience} />
        )}
        {step === 4 && <SkillsBody skills={skills} setSkills={setSkills} />}
        {step === 5 && (
          <AchievementsBody
            achievements={achievements}
            setAchievements={setAchievements}
          />
        )}
        {step === 6 && (
          <ProjectsBody project={project} setProject={setProject} />
        )}

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

export default ResumeForm;
