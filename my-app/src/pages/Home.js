import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Import global CSS

const Home = () => {
  return (
    <div className="bg">
      <h1>TechLegal</h1>
      <p>We do Summarization, Risk Analysis, Text Cross Verification</p>
      <Link to="/upload">
        <button className="upload-btn">Upload</button>
      </Link>
    </div>
  );
};

export default Home;
