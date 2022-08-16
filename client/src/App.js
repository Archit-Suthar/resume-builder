import "./App.css";
import axios from "axios";
import InfoHeader from "./components/Home/InfoHeader";
import InfoBody from "./components/Home/InfoBody";
import ResumeForm from "./components/ResumeForm/ResumeForm";
import { useSelector } from "react-redux";
import { selectResume } from "./features/setResumeSlice";
import saveAs from "file-saver";
import { Button } from "@material-ui/core";

function App() {
  const resume = useSelector(selectResume);

  // handle the print button
  const handlePrint = async () => {
    await axios
      .post("http://localhost:4000/create-pdf", resume)
      .then(() => axios.get("http://localhost:4000/", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "apllication/pdf" });
        saveAs(pdfBlob, "MyResume.pdf");
      });
  };

  return (
    <div className="App">
      {/* top-section */}
      <div className="topSection">
        <InfoHeader />
        <InfoBody />
      </div>

      {/* resume form + Print Button */}
      <div id="ResumeForm" className="formDiv">
        <span className="posCenter headerText">Resume Form</span>
        <ResumeForm />
        <div className="printBtn posCenter">
          <Button variant="contained" color="primary" onClick={handlePrint}>
            Download Resume
          </Button>
        </div>
        {/* <Preview /> */}
      </div>
    </div>
  );
}

export default App;
