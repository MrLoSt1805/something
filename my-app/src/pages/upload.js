// import React, { useState, useRef } from "react";
// import { CloudUploadOutlined } from "@ant-design/icons";
// import "../styles.css";
// import "./upload.css";
// import { Link } from "react-router-dom";
// const UploadPage = () => {
//   const [file, setFile] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile && selectedFile.type === "application/pdf") {
//       setFile(URL.createObjectURL(selectedFile));
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   return (
//     <div className="bg">
//       {!file ? (
//         <div onClick={() => fileInputRef.current.click()} className="upload-box">
//           <CloudUploadOutlined className="upload-icon" />
//           <p>Click to upload a PDF</p>
//           <input
//             type="file"
//             ref={fileInputRef}
//             className="hidden-input"
//             onChange={handleFileChange}
//             accept="application/pdf"
//           />
//         </div>
//       ) : (
//         <>
//           {/* PDF viewer on the left */}
//           <div className="pdf-preview">
//             <iframe
//               src={file}
//               width="100%"
//               height="100%"
//               style={{ border: "none" }}
//               title="PDF Preview"
//             />
//           </div>

//           {/* Buttons on the right */}
//           <div className="button-container">
//           <Link to="/summary">
//             <button className="action-btn">Summarization</button>
//           </Link>
//             <button className="action-btn">Risk Analysis</button>
//             <button className="action-btn">Cross Verification</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default UploadPage;


import React, { useState, useRef } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import backgroundImage from "../assets/pic_2.jpg"; // ✅ Correct Import
import "../styles.css";
import "./upload.css";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(URL.createObjectURL(selectedFile));
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${backgroundImage})`, // ✅ Sets background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
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
            <div className="pdf-preview">
              <iframe
                src={file}
                width="100%"
                height="600px"
                style={{ border: "none" }}
                title="PDF Preview"
              ></iframe>
            </div>

            <div className="button-container">
              <button className="action-btn">Summarization</button>
              <button className="action-btn">Risk Analysis</button>
              <button className="action-btn">Cross Verification</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
