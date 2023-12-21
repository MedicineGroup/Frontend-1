import React ,{useEffect, useState}from 'react'
import { useAuthContext } from "../../store/auth-context";
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useLocation } from 'react-router-dom';
function ConsultationDetail() {
  const location = useLocation();
  const { state } = location;
  console.log("Consultation Detail Props:", state);
  const [consultation, setConsultation] = useState(state.consultation || '');
  const { jwtToken } = useAuthContext();
    const [file, setFile] = useState('');
    const [title, setTitle]=useState('');
    const [allImage, setAllImage] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    useEffect(() => {
      getPdf();
    }, []);
    const getPdf = async () => {
      const result = await axios.get("http://localhost:8888/get-files");
      console.log(result.data.data);
      setAllImage(result.data.data);
    };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "http://localhost:8888/upload-files" ,//`${import.meta.env.VITE_API_URL}${API_ROUTES.PostAnalyse}`
      formData,
      {
        headers: { 
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };
  const showPdf = (pdf) => {
    window.open(`http://localhost:8888/files/${pdf}`, "_blank", "noreferrer");
    //setPdfFile(`http://localhost:8888/files/${pdf}`)
  };

  return (
    <>
    <Card className="mt-6">
        <CardHeader color="blue-gray">
          <h2>Consultation Detail</h2>
        </CardHeader>
        <CardBody>
          <div>
            {consultation.state === 'Waiting to see doctor' && (
              <div>
                <p>Date: {new Date(consultation.date).toLocaleDateString()}</p>
              </div>
            )}
            {consultation.state === 'Waiting to do analyses' && (
              <div>
                <p></p>
                <form className="formStyle">
                  <h4>Please upload PDF for analyses:</h4>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <br />
                  <input
                    type="file"
                    className="form-control"
                    accept="application/pdf"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </form>
              </div>
            )}
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          {/* Conditionally render the Submit button */}
          {consultation.state === 'Waiting to do analyses' && (
            <Button className="bg-primary" onClick={submitImage}>
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
      <br/>
      <br/>
      <br/>
    <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data, index) => {
                return (
                  <div  key={index} className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
  </>
    
  )
}

export default ConsultationDetail