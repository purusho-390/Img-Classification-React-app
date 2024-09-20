import React, { useState } from 'react';

const Detection = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [results, setResults] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      setResults('Image uploaded successfully. Click "Upload" to process.');
    }
  };

  const handleManualUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleUpload = async () => {
    if (uploadedImage) {
      const formData = new FormData();
      formData.append("file", uploadedImage);

      try {
        const response = await fetch("http://localhost:8000/detection", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          setResults(`Class: ${result.class_name}, Confidence: ${result.confidence_score}`);
        } else {
          setResults("Error processing image. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setResults("Error processing image. Please try again.");
      }
    }
  };

  const handleReupload = () => {
    setUploadedImage(null);
    setResults('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-indigo-400">Parkinson Detection using MRI Images</h2>

      <div
        className={`w-full max-w-2xl p-8 border-4 border-dashed ${isDragging ? 'border-indigo-600' : 'border-gray-500'} rounded-lg bg-gray-800 flex flex-col items-center justify-center transition-all duration-300 ease-in-out`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleFileDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="fileInput"
        />
        <p className="text-lg text-gray-400 mb-4">{isDragging ? 'Drop the image here' : 'Drag and drop image or click to upload'}</p>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
          onClick={handleManualUpload}
        >
          Manual Upload
        </button>
      </div>

      {uploadedImage && (
        <div className="mt-8">
          <img src={uploadedImage} alt="Uploaded" className="rounded-lg shadow-lg w-96 h-72 object-cover transition-all duration-300 ease-in-out" />
        </div>
      )}

      <div className="mt-6 flex gap-4">
        {uploadedImage && (
          <>
            <button
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
              onClick={handleUpload}
            >
              Upload
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
              onClick={handleReupload}
            >
              Reupload
            </button>
          </>
        )}
      </div>

      {results && (
        <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg max-w-lg w-full">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Results:</h3>
          <p>{results}</p>
        </div>
      )}
    </div>
  );
};

export default Detection;
