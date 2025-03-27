import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const SummaryPage = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch("http://localhost:5000/summarize", {
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Failed to generate PDF");
        }

        // Check for correct Content-Type
        const contentType = response.headers.get("Content-Type");
        if (contentType !== "application/pdf") {
          throw new Error("Invalid content type received");
        }

        // Create blob URL from the PDF response
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        setPdfUrl(url);
        setLoading(false);

      } catch (error) {
        console.error("Error:", error);
        alert("Failed to display PDF.");
        setLoading(false);
        navigate('/');  // Redirect back to upload page on error
      }
    };

    fetchPDF();
  }, [navigate]);

  return (
    <div className="summary-container">
      <h1>Summarization Result</h1>

      <button onClick={() => navigate('/')} className="action-btn">
        Back to Upload
      </button>

      {loading ? (
        <p>Generating PDF...</p>
      ) : pdfUrl ? (
        <iframe
          src={pdfUrl}
          width="100%"
          height="800px"
          style={{ border: "none", marginTop: "20px" }}
          title="Generated PDF"
        />
      ) : (
        <p>No PDF available. Please go back and generate one.</p>
      )}
    </div>
  );
};

export default SummaryPage;
