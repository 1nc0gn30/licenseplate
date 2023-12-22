import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Camera from './components/Camera';
import LicensePlateScanner from './components/LicensePlateScanner';
import TokenDisplay from './components/TokenDisplay';
import ErrorComponent from './components/ErrorComponent';

function App() {
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = (imageSrc) => {
    setCapturedImage(imageSrc);
    // Optionally, navigate to the /scan route if needed
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Camera onCapture={handleCapture} />} />
          <Route path="/scan" element={<LicensePlateScanner image={capturedImage} />} />
          <Route path="/token" element={<TokenDisplay />} />
          <Route path="/error" element={<ErrorComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
