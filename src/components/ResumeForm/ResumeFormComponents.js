import React, { useContext, useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export const BasicInfoBody = ({ basicInfo, setbasicInfo }) => {
  const onInputChange = (e) => {
    setbasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
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
              value={basicInfo.fullname}
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
              value={basicInfo.mno}
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
              value={basicInfo.title}
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
              value={basicInfo.email}
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
              value={basicInfo.linked}
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
              value={basicInfo.about}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export const EducationBody = ({ education, setEducation }) => {
  const onInputChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
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
              value={education.institute}
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
              value={education.state}
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
              value={education.degree}
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
              value={education.studyField}
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
              value={education.year}
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
              value={education.percent}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <br />
        <Button variant="outlined" color="primary" disabled>
          + Add Education
        </Button>
      </Container>
    </div>
  );
};

export const WorkExpBody = ({ experience, setExperience }) => {
  const onInputChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
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
              value={experience.jobTitle}
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
              value={experience.cmpName}
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
              value={experience.sDate}
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
              value={experience.eDate}
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
              value={experience.jobDsp}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <br />
        <Button variant="outlined" color="primary" disabled>
          + Add Experience
        </Button>
      </Container>
    </div>
  );
};

export const SkillsBody = ({ skills, setSkills }) => {
  const [input, setInput] = useState("");
  return (
    <div className="skills">
      <Container>
        <h2>Skill</h2>
        <Container>
          {skills.map((skill, index) => (
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
                  setSkills(skills.filter((s) => s !== skill));
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
          onClick={() => setSkills([...skills, input])}
          disabled={input.length === 0}
        >
          + Add Skill
        </Button>
      </Container>
    </div>
  );
};

export const AchievementsBody = ({ achievements, setAchievements }) => {
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
          value={achievements}
          onChange={(e) => setAchievements(e.target.value)}
        />
      </Container>
    </div>
  );
};

export const ProjectsBody = ({ project, setProject }) => {
  const onInputChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
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
              value={project.projTitle}
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
              value={project.projURL}
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
              value={project.projDsp}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <br />
        <Button variant="outlined" color="primary" disabled>
          + Add Projects
        </Button>
      </Container>
    </div>
  );
};
