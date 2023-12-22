import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Camera from './components/Camera';
import LicensePlateScanner from './components/LicensePlateScanner';
import TokenDisplay from './components/TokenDisplay';
import ErrorComponent from './components/ErrorComponent';

function App() {
  const handleCapture = (imageSrc) => {
    // Handle the captured image here
    console.log(imageSrc);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Camera onCapture={handleCapture} />} />
          <Route path="/scan" element={<LicensePlateScanner />} />
          <Route path="/token" element={<TokenDisplay />} />
          <Route path="/error" element={<ErrorComponent />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
