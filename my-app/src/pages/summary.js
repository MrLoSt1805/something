import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/pic_2.jpg";  
import "../styles.css";
import "./upload.css";
const SummaryPage = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);  // ✅ Added PDF state
  const navigate = useNavigate();

  useEffect(() => {
    const generatePDF = async () => {
      const response = await fetch("http://localhost:5000/summarize", {
        method: "POST",
      });

      const data = await response.json();
      setMessage(data.message);
      setLoading(false);

      // ✅ Set PDF URL after generation
      if (data.message === "PDF generated successfully.") {
        setPdfUrl("http://localhost:5000/pdf");  // Adjust the URL path
      }
    };

    generatePDF();
  }, [navigate]);

  return (
    <div className="bg" 
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>


      <button onClick={() => navigate('/')} className="action-btn">
        Back to Home
      </button>

      <div className="container">
        {pdfUrl && (
          <div className="pdf-preview">
            <iframe
              src={pdfUrl}  // ✅ Display the PDF after generation
              width="100%"
              height="600px"
              style={{ border: "none" }}
              title="PDF Preview"
            ></iframe>
          </div>
        )}
      </div>

    </div>
  );
};

export default SummaryPage;
