import React, { useState, useEffect } from "react";

const ImageDebug = () => {
  const [imageStatus, setImageStatus] = useState({});
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
    
    // Test image URLs
    const testImages = [
      "./images/dhanush-profile.jpg",
      "/images/dhanush-profile.jpg",
      "images/dhanush-profile.jpg",
      process.env.PUBLIC_URL + "/images/dhanush-profile.jpg"
    ];

    testImages.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        setImageStatus(prev => ({ ...prev, [url]: "✅ Found" }));
      };
      img.onerror = () => {
        setImageStatus(prev => ({ ...prev, [url]: "❌ Not Found" }));
      };
      img.src = url;
    });
  }, []);

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', background: 'white', padding: '10px', border: '1px solid black', fontSize: '12px', zIndex: 9999 }}>
      <div><strong>Image Debug Info:</strong></div>
      <div>Current URL: {currentUrl}</div>
      <div>PUBLIC_URL: {process.env.PUBLIC_URL || 'undefined'}</div>
      <br />
      {Object.entries(imageStatus).map(([url, status]) => (
        <div key={url}>{url}: {status}</div>
      ))}
    </div>
  );
};

export default ImageDebug;