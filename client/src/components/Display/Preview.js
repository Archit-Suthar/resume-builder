import React from "react";
import { useSelector } from "react-redux";
import { selectResume } from "../../features/setResumeSlice";
import "./Preview.css";
const Preview = () => {
  const resume = useSelector(selectResume);

  return (
    <div className="yui-t7">
      <div>
        <div id="hd">
          <div className="yui-gc">
            <div className="yui-u first">
              <h1>${resume.basicInfo.fullname}</h1>
              <h2>${resume.basicInfo.title}</h2>
            </div>

            <div className="yui-u">
              <div className="contact-info">
                <h3>${resume.basicInfo.mno}</h3>
                <h3>
                  <a href="mailto:${resume.basicInfo.email}">
                    ${resume.basicInfo.email}
                  </a>
                </h3>
                <h3>
                  <a href="#">${resume.basicInfo.github}</a>
                </h3>
                <h3>
                  <a href="#">LinkedIn</a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div id="bd">
          <div id="yui-main">
            <div className="yui-b">
              <div className="yui-gf">
                <div className="yui-u first">
                  <h2>Profile</h2>
                </div>
                <div className="yui-u">
                  <p className="enlarge">${resume.basicInfo.about}</p>
                </div>
              </div>

              <div className="yui-gf">
                <div className="yui-u first">
                  <h2>Skills</h2>
                </div>
                <div className="yui-u">
                  $
                  {resume.skills.map(
                    (skill) =>
                      `<ul className="talent">
                                    <li className="last">${skill}</li>
                                </ul>`
                  )}
                </div>
              </div>

              <div className="yui-gf">
                <div className="yui-u first">
                  <h2>Experience</h2>
                </div>

                <div className="yui-u">
                  <div className="job last">
                    <h2>${resume.experience.cmpName}</h2>
                    <h3>${resume.experience.jobTitle}</h3>
                    <h4>
                      ${resume.experience.sDate}-${resume.experience.eDate}
                    </h4>
                    <p>${resume.experience.jobDsp}</p>
                  </div>
                </div>
              </div>

              <div className="yui-gf">
                <div className="yui-u first">
                  <h2>Education</h2>
                </div>
                <div className="yui-u">
                  <h2>${resume.education.institute}</h2>
                  <h3>
                    ${resume.education.studyField}&mdash;{" "}
                    <strong>${resume.education.precent}</strong>{" "}
                  </h3>
                </div>
              </div>

              <div className="yui-gf last">
                <div className="yui-u first">
                  <h2>Achievements</h2>
                </div>
                <div className="yui-u">
                  <h3>${resume.achievements}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
