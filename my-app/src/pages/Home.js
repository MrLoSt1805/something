// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles.css"; // Import global CSS

// const Home = () => {
//   return (
//     <div className="bg">
//       <h1>TechLegal</h1>
//       <p>We do Summarization, Risk Analysis, Text Cross Verification</p>
//       <Link to="/upload">
//         <button className="upload-btn">Upload</button>
//       </Link>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Import global styles

const Home = () => {
  return (
    <div className="home-container">
      {/* TechLegal Text (Top-Left) */}
      <h1 className="techlegal">TECHLEGAL</h1>

      {/* Left Section (Upload Button) */}
      <div className="left-section">
        <Link to="/upload">
          <button className="upload-btn">Get Started</button>
        </Link>
      </div>

      {/* Right Section (About Us) */}

        <div className="about-box">
          <h2>About Us</h2>
          <p>
            TechLegal is an AI-powered legal analysis platform that streamlines document review. 
            We convert uploaded PDFs into concise summaries, identify potential risks, and 
            cross-verify referenced articles and laws for validity. Our goal is to simplify 
            legal research, enhance compliance, and save time for professionals with 
            accurate, automated insights.
          </p>
        </div>
      </div>
    
  );
};

export default Home;
