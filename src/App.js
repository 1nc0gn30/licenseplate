import React, { useState } from 'react';
import Camera from './components/Camera';
import LicensePlateScanner from './components/LicensePlateScanner';

const App = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = (imageSrc) => {
    setCapturedImage(imageSrc);
  };

  return (
    <div>
      <Camera onCapture={handleCapture} />
      {capturedImage && <LicensePlateScanner image={capturedImage} />}
    </div>
  );
};

export default App;
