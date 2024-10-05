"use client";

import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [diseased, setDiseased] = useState(false);

  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
      setDiseased(false); // Reset disease state when a new image is selected
    }
  };

  const handleDetectDisease = () => {
    // TODO: Implement disease detection logic here
    setDiseased(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg.jpg')`, filter: 'blur(3px)' }} />
      
      {/* Glass Effect Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md p-4 bg-white bg-opacity-40 backdrop-blur-lg rounded-lg shadow-md">

        <h1 className="text-6xl font-bold mb-8 mt-4">AgriVision</h1>
        <h2 className="text-2xl font-bold mb-4 ">Plant infection detection</h2>
        <Label htmlFor="image" className='text-lg mb-4 mt-2'>Select an image of a leaf:</Label>
        <div className="flex justify-center">
                <div className="w-full p-4 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-300">
                  <Input type="file" id="image" onChange={handleImageChange} className="hidden" />
                  <Label htmlFor="image" className="text-lg font-bold text-gray-600">Upload Image</Label>
                </div>
              </div>
        
        {selectedImage && (
          <div className="flex flex-col items-center justify-center mt-4">
            <img 
              src={URL.createObjectURL(selectedImage)} 
              alt="Selected Image" 
              className="w-full max-w-md h-auto" 
            />
            <Button variant="primary" onClick={handleDetectDisease} className="mt-4">Detect Disease</Button>
            {diseased && (
              <p className="text-red-500 font-bold mt-4">Disease detected!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
