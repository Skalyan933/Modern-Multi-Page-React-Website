import React from "react";
import { Link } from "react-router-dom";
import './/styles/PageNotFound.css' // Import CSS file

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      
      <Link to="/" className="home-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
