import React, { useState, useRef } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import "../styles.css";
import "./upload.css";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(URL.createObjectURL(selectedFile)); // Create a URL for the uploaded PDF
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="bg">
      {!file ? (
        <div onClick={() => fileInputRef.current.click()} className="upload-box">
          <CloudUploadOutlined className="upload-icon" />
          <p>Click to upload a PDF</p>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden-input"
            onChange={handleFileChange}
            accept="application/pdf"
          />
        </div>
      ) : (
        <div className="container">
          {/* Left: PDF Preview */}
          <div className="pdf-preview">
            <iframe
              src={file}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="PDF Preview"
            ></iframe>
          </div>

          {/* Right: Action Buttons */}
          <div className="button-container">
            <button className="action-btn">Summarization</button>
            <button className="action-btn">Risk Analysis</button>
            <button className="action-btn">Cross Verification</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
