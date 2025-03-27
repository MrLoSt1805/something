
// import React, { useState, useRef } from "react";
// import { CloudUploadOutlined } from "@ant-design/icons";
// import backgroundImage from "../assets/pic_2.jpg";  // ✅ Correct Import
// import "../styles.css";
// import "./upload.css";

// const UploadPage = () => {
//   const [file, setFile] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile && selectedFile.type === "application/pdf") {
//       setFile(URL.createObjectURL(selectedFile));
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   const handleSummarization = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/summarize", {
//         method: "POST",
//       });

//       if (!response.ok) {
//         throw new Error("Failed to generate PDF");
//       }

//       const blob = await response.blob();
//       const pdfUrl = URL.createObjectURL(blob);
//       setPdfUrl(pdfUrl);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to generate PDF.");
//     }
//   };

//   return (
//     <div
//       className="bg"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div>
//         {!file ? (
//           <div onClick={() => fileInputRef.current.click()} className="upload-box">
//             <CloudUploadOutlined className="upload-icon" />
//             <p>Click to upload a PDF</p>
//             <input
//               type="file"
//               ref={fileInputRef}
//               className="hidden-input"
//               onChange={handleFileChange}
//               accept="application/pdf"
//             />
//           </div>
//         ) : (
//           <>
//             <div className="container">
//               <div className="pdf-preview">
//                 <iframe
//                   src={file}
//                   width="100%"
//                   height="600px"
//                   style={{ border: "none" }}
//                   title="PDF Preview"
//                 ></iframe>
//               </div>

//               <div className="button-container">
//                 <button onClick={handleSummarization} className="action-btn">
//                   Summarization
//                 </button>

//                 <button className="action-btn">Cross Verification</button>
//               </div>
//             </div>

//             {pdfUrl && (
//               <div className="pdf-container">
//                 <h3>Generated PDF:</h3>
//                 <iframe
//                   src={pdfUrl}
//                   width="100%"
//                   height="600px"
//                   style={{ border: "none" }}
//                   title="Generated PDF"
//                 ></iframe>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadPage;

import React, { useState, useRef } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";  // For navigation
import backgroundImage from "../assets/pic_2.jpg";  
import "../styles.css";
import "./upload.css";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(URL.createObjectURL(selectedFile));
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleSummarization = () => {
    // Redirect to /summary before processing starts
    navigate('/summary');
  };

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
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
              <button 
                onClick={handleSummarization} 
                className="action-btn"
              >
                Summarize
              </button>
              
              <button className="action-btn">Cross Verification</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;

