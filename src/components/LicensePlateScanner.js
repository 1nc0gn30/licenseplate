import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LicensePlateScanner = ({ image }) => {
  const [licensePlate, setLicensePlate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const recognizeLicensePlate = async () => {
      if (!image) return;

      try {
        setIsLoading(true);
        setError(null);

        const apiUrl = 'https://api.platerecognizer.com/v1/plate-reader';
        const formData = new FormData();
        formData.append('upload', image);
        // Add other parameters as needed, e.g., regions, camera_id, etc.

        const response = await axios.post(apiUrl, formData, {
          headers: {
            'Authorization': '2c0871e7e993b967a56fa1a1663bd56273379055', // Replace 'your-api-token' with your actual API token
            'Content-Type': 'multipart/form-data',
          },
        });

        // Assuming you want to display the first recognized license plate
        const plates = response.data.results;
        if (plates.length > 0) {
          setLicensePlate(plates[0].plate);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    recognizeLicensePlate();
  }, [image]);

  return (
    <div>
      {isLoading && <p>Scanning license plate...</p>}
      {licensePlate && <p>License Plate: {licensePlate}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default LicensePlateScanner;
