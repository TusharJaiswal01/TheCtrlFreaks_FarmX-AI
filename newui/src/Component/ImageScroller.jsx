import React from "react";
import "./ImageScroller.css";




const ImageScroller = () => {
  // Array of image URLs
  const images = [
    "/icons/chatbot.svg",
    "/icons/education.svg",
    "/icons/codeEditor.svg",
    "/icons/study.svg",
    "/icons/collaboration.svg",
    "/icons/monitoring.svg",
    "/icons/internet.svg",
    
  ];

  return (
    <div className="image-scroller-container">
      <div className="image-scroller">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Icon ${index + 1}`} className="p-4" />
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
