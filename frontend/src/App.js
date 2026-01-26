import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import { Toaster } from "./components/ui/toaster";

// Get basename from environment or default to empty string for GitHub Pages
// For GitHub Pages with custom domain (root domain), basename should be empty string
// For subdirectory deployments, set PUBLIC_URL to the subdirectory path
const basename = process.env.PUBLIC_URL === '.' ? '' : (process.env.PUBLIC_URL || '');

function App() {
  // Error boundary fallback
  React.useEffect(() => {
    console.log('App mounted successfully');
    console.log('Basename:', basename);
    console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;