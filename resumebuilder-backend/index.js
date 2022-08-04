const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
const pdf = require("html-pdf");
const pdfTemplate = require("./documents");

app.use(cors());

var options = {
  header: {
    height: "15mm",
  },
  footer: {
    height: "15mm",
  },
};
app.post("/create-pdf", (req, res) => {
  console.log(req.body);
  pdf.create(pdfTemplate(req.body), options).toFile("resume.pdf", (err) => {
    // console.log(req);
    if (err) res.send(Promise.reject());

    return res.send("data : ");
  });
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/resume.pdf`);
});

app.listen(PORT, () => {
  console.log("server is running");
});
