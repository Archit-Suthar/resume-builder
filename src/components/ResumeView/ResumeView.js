import { Grid } from "@material-ui/core";
import React from "react";
import "./ResumeView.css";
import LinkedInicon from "@material-ui/icons/LinkedIn";
import { useSelector } from "react-redux";
import { selectResume } from "../../features/setResumeSlice";

const ResumeView = () => {
  const resume = useSelector(selectResume);
  // console.log(resume);
  return (
    <div>
      <div className="normalFont">
        <div className="header name posCenter">{resume.basicInfo.fullname}</div>
        <div className="title posCenter">{resume.basicInfo.title}</div>
        <div className="contentDiv floater">
          <div className="mno">{resume.basicInfo.mno}</div>

          <div className="github">Github</div>
          <a href={resume.basicInfo.linked} className="llink">
            LinkedIn
            {/* {<LinkedInicon />} */}
          </a>
          <div className="email">{resume.basicInfo.email}</div>
        </div>
      </div>
      <hr />
      <div className="about">
        <h2 className="about">About Me</h2>
        <p className="normalFont contentDiv"> {resume.basicInfo.about}</p>
      </div>
      <hr />
      <div className="education">
        <h2>Education</h2>
        <div className="normalFont contentDiv">
          <p>{resume.education.institute}</p>
          <p>{resume.education.degree}</p>

          <p>{resume.education.year}</p>
        </div>
      </div>
      <hr />
      <div className="exprience">
        <h2>Experience</h2>
        <div className="normalFont contentDiv">
          <div className="job floater">
            <span>{resume.experience.jobTitle}</span>
            <span>
              [{resume.experience.sDate}] - [{resume.experience.eDate}]
            </span>
          </div>
          <span>{resume.experience.cmpName}</span>
          <p>{resume.experience.jobDsp}</p>
        </div>
      </div>
      <hr />
      <div className="skills">
        <h2>Skills</h2>
        <Grid container className="normalFont contentDiv">
          {resume.skills?.map((skill) => (
            <Grid key={skill} item xs={6}>
              {skill}
            </Grid>
          ))}
        </Grid>
      </div>
      <hr />
      <div className="projects">
        <h2>Projects</h2>
        <div className="normalFont contentDiv">
          <p>{resume.projects.projTitle}</p>
          <p>{resume.projects.projDsp}</p>
          <span>{resume.projects.projURL}</span>
        </div>
      </div>
      <div className="achievements">
        <h2>Achievements</h2>
        <p className="normalFont contentDiv">{resume.achievements}</p>
      </div>
    </div>
  );
};

export default ResumeView;
