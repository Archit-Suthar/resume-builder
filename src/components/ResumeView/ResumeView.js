import { Grid } from "@material-ui/core";
import React from "react";
import "./ResumeView.css";
import LinkedInicon from "@material-ui/icons/LinkedIn";
const ResumeView = ({ resume }) => {
  return (
    <div className="resumeView">
      <div className="normalFont contentDiv floater">
        <div>
          <div className="header name">{resume.basicInfo.fullname}</div>
          <div className="title">{resume.basicInfo.title}</div>
          <div className="mno">{resume.basicInfo.mno}</div>
        </div>
        <div>
          <div className="github">Github</div>
          <a href={resume.basicInfo.linked} className="llink">
            LinkedIn
            {<LinkedInicon />}
          </a>
          <div className="email">{resume.basicInfo.email}</div>
        </div>
      </div>
      <hr />
      <div className="about">
        <h2 className="about">About Me</h2>
        <p className="normalFont contentDiv">
          {" "}
          {resume.basicInfo.about} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis facilis reiciendis aliquam dolorem numquam
          magnam neque provident recusandae. Tempora, laboriosam!{" "}
        </p>
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
          {console.log(resume.skills)}
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
