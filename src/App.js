import { useRef, useState } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import ResumeForm from "./components/ResumeForm/ResumeForm";
import ResumeView from "./components/ResumeView/ResumeView";
import "./App.css";
import ReactToPrint from "react-to-print";

function App() {
  const [resume, setResume] = useState({
    basicInfo: {},
    education: {},
    experience: {},
    skills: [],
    achievements: "",
    projects: {},
  });
  let componentRef = useRef();
  return (
    <div className="App">
      <Header />
      <Home />
      <Grid container>
        <Grid item xs={12} lg={6}>
          <h1 style={{ marginLeft: "30px" }}>Resume Form</h1>
          <ResumeForm resume={resume} setResume={setResume} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <h1>ResumeView</h1>
          <div ref={(el) => (componentRef = el)}>
            <ResumeView resume={resume} />
          </div>
        </Grid>
      </Grid>
      <ReactToPrint
        trigger={() => <Button variant="contained">Print this out!</Button>}
        content={() => componentRef}
        documentTitle="MyResume"
        pageStyle="print"
      />
    </div>
  );
}

export default App;
