import { useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import InfoHeader from "./components/Home/InfoHeader";
import InfoBody from "./components/Home/InfoBody";
import ResumeForm from "./components/ResumeForm/ResumeForm";
import ResumeView from "./components/ResumeView/ResumeView";
import "./App.css";
import ReactToPrint from "react-to-print";

function App() {
  let componentRef = useRef();
  return (
    <div className="App">
      {/* top-section */}
      <div className="topSection">
        <InfoHeader />
        <InfoBody />
      </div>
      {/*  */}

      {/* resume form + Print Button */}
      <div id="ResumeForm" className="formDiv">
        <span className="posCenter headerText">Resume Form</span>
        <ResumeForm />
        <div className="printBtn posCenter">
          <ReactToPrint
            trigger={() => <Button variant="contained">Print this out!</Button>}
            content={() => componentRef}
            documentTitle="MyResume"
            pageStyle="print"
          />
        </div>
      </div>
      {/*  */}

      {/* view of the resume  */}
      <div>
        <span className="posCenter headerText">ResumeView</span>
        <div className="resumeView">
          <div className="shadow">
            <div ref={(el) => (componentRef = el)}>
              <ResumeView />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default App;
