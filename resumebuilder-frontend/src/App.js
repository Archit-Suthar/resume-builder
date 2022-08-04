import "./App.css";
import axios from "axios";
import InfoHeader from "./components/Home/InfoHeader";
import InfoBody from "./components/Home/InfoBody";
import ResumeForm from "./components/ResumeForm/ResumeForm";
import { useSelector } from "react-redux";
import { selectResume } from "./features/setResumeSlice";
import saveAs from "file-saver";

function App() {
  const resume = useSelector(selectResume);
  var body = {
    userName: "Fred",
    userEmail: "Flintstone@gmail.com",
  };
  const handlePrint = async () => {
    // console.log("resume : ", body);
    await axios
      .post("http://localhost:4000/create-pdf", resume)
      .then(() => axios.get("http://localhost:4000/", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "apllication/pdf" });
        saveAs(pdfBlob, "MyResume.pdf");
      });
    // const response = await axios({
    //   method: "post",
    //   url: "http://localhost:4000/create-pdf",
    //   data: resume,
    //   headers: {
    //     "Content-Type": `application/json`,
    //   },
    // });
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
          <button onClick={handlePrint}>print</button>
        </div>
      </div>
    </div>
  );
}

export default App;
