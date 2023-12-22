import React, { useRef } from 'react';
import Webcam from "react-webcam";

const Camera = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  }, [webcamRef, onCapture]);

  return (
    <>
      <Webcam ref={webcamRef} />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default Camera;
