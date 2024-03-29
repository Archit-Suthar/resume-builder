module.exports = (resume) => {
  let str;
  str = resume.skills.map(
    (skill) =>
      `<ul class="talent">
            <li class="last">
               ${skill}    
            </li>
        </ul>`
  );
  let newString = "";
  str.forEach(myFunction);
  function myFunction(item) {
    newString += item;
  }
  //   console.log(newString);
  // str = newS.replace("React", "kevaadsa");
  //   console.log(resume);
  return `<!DOCTYPE html>
  <html>
  
  <head>
  
      <title>Jonathan Doe | Web Designer, Director | name@yourdomain.com</title>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  
      <meta name="keywords" content="" />
      <meta name="description" content="" />
  
      <link rel="stylesheet" type="text/css"
          href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" />
      <style type="text/css">
          .msg {
              padding: 10px;
              background: #222;
              position: relative;
          }
  
          .msg h1 {
              color: #fff;
          }
  
          .msg a {
              margin-left: 20px;
              background: #408814;
              color: white;
              padding: 4px 8px;
              text-decoration: none;
          }
  
          .msg a:hover {
              background: #266400;
          }
  
          /* //-- yui-grids style overrides -- */
          body {
              font-family: Georgia;
              color: #444;
          }
  
          .yui-gf {
              margin-bottom: 2em;
              padding-bottom: 2em;
              border-bottom: 1px solid #ccc;
          }
  
          /* //-- header, body, footer -- */
          #hd {
              margin: 0 0 3em 0;
              padding-bottom: 1.5em;
              border-bottom: 1px solid #ccc;
          }
  
          #hd h2 {
              text-transform: uppercase;
              letter-spacing: 2px;
          }
  
          #bd,
          #ft {
              margin-bottom: 2em;
          }
  
          /* //-- footer -- */
          #ft {
              padding: 1em 0 5em 0;
              font-size: 92%;
              border-top: 1px solid #ccc;
              text-align: center;
          }
  
          #ft p {
              margin-bottom: 0;
              text-align: center;
          }
  
          /* //-- core typography and style -- */
          #hd h1 {
              font-size: 40px;
              text-transform: uppercase;
              letter-spacing: 3px;
          }
  
          h2 {
              font-size: 152%;
          }
  
          h3,
          h4 {
              font-size: 122%;
          }
  
          h1,
          h2,
          h3,
          h4 {
              color: #333;
          }
  
          p {
              font-size: 100%;
              line-height: 18px;
              padding-right: 3em;
          }
  
          a {
              color: #990003;
          }
  
          a:hover {
              text-decoration: none;
          }
  
          strong {
              font-weight: bold;
          }
  
          li {
              line-height: 24px;
              border-bottom: 1px solid #ccc;
          }
  
          p.enlarge {
              font-size: 144%;
              padding-right: 6.5em;
              line-height: 24px;
          }
  
          p.enlarge span {
              color: #000;
          }
  
          .contact-info {
              margin-top: 7px;
          }
  
          .first h2 {
              font-style: italic;
          }
  
          .last {
              border-bottom: 0;
          }
  
          /* //-- section styles -- */
  
          a#pdf {
              display: block;
              float: left;
              background: #666;
              color: white;
              padding: 6px 50px 6px 12px;
              margin-bottom: 6px;
              text-decoration: none;
          }
  
          a#pdf:hover {
              background: #222;
          }
  
          .job {
              position: relative;
              margin-bottom: 1em;
          }
  
          .job h4 {
              position: absolute;
              top: 0.35em;
              right: 0;
          }
  
          .job p {
              margin: 0.75em 0 1em 0;
          }
  
          .last {
              border: none;
          }
  
          .skills-list {}
  
          .skills-list ul {
              margin: 0;
          }
  
          .skills-list li {
              margin: 3px 0;
              padding: 3px 0;
          }
  
          .skills-list li span {
              font-size: 152%;
              display: block;
              margin-bottom: -2px;
              padding: 0;
          }
  
          .talent {
              width: 32%;
              float: left;
          }
  
          .talent h2 {
              margin-bottom: 6px;
          }
  
          #srt-ttab {
              margin-bottom: 100px;
              text-align: center;
          }
  
          #srt-ttab img.last {
              margin-top: 20px;
          }
  
          /* --// override to force 1/8th width grids -- */
          .yui-gf .yui-u {
              width: 80.2%;
          }
  
          .yui-gf div.first {
              width: 12.3%;
          }
      </style>
  </head>
  
  <body>
  
      <div class="yui-t7" style="margin: 0 auto">
          <div>
  
              <div id="hd">
                  <div class="yui-gc">
                      <div class="yui-u first">
                          <h1>${resume.basicInfo.fullname}</h1>
                          <h2>${resume.basicInfo.title}</h2>
                      </div>
  
                      <div class="yui-u">
                          <div class="contact-info">
                              <h3>${resume.basicInfo.mno}</h3>
                              ${
                                resume.basicInfo.email != undefined
                                  ? `<h3><a href="mailto:${resume.basicInfo.email}">${resume.basicInfo.email}</a></h3>`
                                  : ""
                              }
                              ${
                                resume.basicInfo.github != undefined
                                  ? `<h3><a href="#">${resume.basicInfo.github}</a></h3>`
                                  : ""
                              }
                              ${
                                resume.basicInfo.linked != undefined
                                  ? `<h3><a href="${resume.basicInfo.linked}">${resume.basicInfo.linked}</a></h3>`
                                  : ""
                              }
  
  
                          </div>
                          <!--// .contact-info -->
                      </div>
                  </div>
                  <!--// .yui-gc -->
              </div>
              <!--// hd -->
  
              <div id="bd">
                  <div id="yui-main">
                      <div class="yui-b">
  
                          <div class="yui-gf">
                              <div class="yui-u first">
                                  <h2>Profile</h2>
                              </div>
                              <div class="yui-u">
                                  <p class="enlarge">
                                  ${resume.basicInfo.about}
                                  </p>
                              </div>
                          </div>
                          <!--// .yui-gf -->
  
                          ${
                            resume.skills.length != 0
                              ? `<div class="yui-gf">
                              <div class="yui-u first">
                                  <h2>Skills</h2>

                              </div>
                              <div class="yui-u">
                                ${newString}
                                  
                              </div>
                          </div>`
                              : `<div></div>`
                          }
                          <!--// .yui-gf-->
  
                          <div class="yui-gf">
  
                              <div class="yui-u first">
                                  <h2>Experience</h2>
                              </div>
                              <!--// .yui-u -->
  
                              <div class="yui-u">
                                    <div class="job last">
                                      <h2>${resume.experience.cmpName}</h2>
                                      <h3>${resume.experience.jobTitle}</h3>
                                      <h4>${resume.experience.sDate}-${
    resume.experience.eDate
  }</h4>
                                      <p>${resume.experience.jobDsp}</p>
                                  </div>
  
                              </div>
                              <!--// .yui-u -->
                          </div>
                          <!--// .yui-gf -->
  
                          <div class="yui-gf">
                              <div class="yui-u first">
                                  <h2>Education</h2>
                              </div>
                              <div class="yui-u">
                                  <h2>${resume.education.institute}</h2>
                                  <h3>${
                                    resume.education.studyField
                                  }&mdash; <strong>${
    resume.education.percent
  }</strong> </h3>
                              </div>
                          </div>
                          <!--// .yui-gf -->
                          <div class="yui-gf">
  
                          <div class="yui-u first">
                              <h2>Projects</h2>
                          </div>
                          <!--// .yui-u -->

                          <div class="yui-u">
                                <div class="job last">
                                  <h2>${resume.projects.projTitle}</h2>
                                  ${
                                    resume.projects.projURL
                                      ? `link : <a href="${resume.projects.projURL}">${resume.projects.projURL}</a>`
                                      : ""
                                  }
                                  <h3>${resume.projects.projDsp}</h3>
                              </div>

                          </div>
                          <!--// .yui-u -->
                      </div>
                      <!--// .yui-gf -->

                          <div class="yui-gf last">
                              <div class="yui-u first">
                                  <h2>Achievements</h2>
                              </div>
                              <div class="yui-u">
                                  <h3>${resume.achievements}</h3>
                              </div>
                          </div>
                          <!--// .yui-gf -->
                      </div>
                      <!--// .yui-b -->
                  </div>
                  <!--// yui-main -->
              </div>
              <!--// bd -->
  
          </div>
  
  
      </div>
      <!--// doc -->
  
  
  </body>
  
  </html>`;
};

// ${resume.skills.map(
//     (skill) =>
//       `<ul class="talent">
//         <li class="last">
//         ${skill}
//         </li>
//        </ul>`
//   )}
