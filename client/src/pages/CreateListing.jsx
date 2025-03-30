import { set } from "mongoose";
import React, { useState, useRef, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

import {useSelector} from 'react-redux'

export default function CreateListing() {
  const currentUser = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent", // Default value
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const cloudinaryRef = useRef();

  const widgetRef = useRef();

  useEffect(() => {
    if (!window.cloudinary) {
      console.error(
        "Cloudinary widget is not loaded. Make sure to include the script."
      );
      return;
    }

    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "doeoer5zm",
        uploadPreset: "test-upload",
        maxFiles: 6,
        sources: ["local", "url", "camera"],
        cropping: true,
        folder: "real_estate",
      },
      (err, result) => {
        if (err) {
          console.error("Upload error:", err);
          return;
        }
        if (result.event === "success") {
          setFormData((prevData) => ({
            ...prevData,
            imageUrls: [...prevData.imageUrls, result.info.secure_url],
          }));
        }
      }
    );
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    setFormData((prevData) => {
      const newValue = type === "checkbox" ? checked : value;

      console.log(formData); //     console.log(`Updated ${id}:`, newValue); ✅ Debugging Log

      return {
        ...prevData,
        [id]: newValue,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  if(formData.imageUrls.length < 1)
  return setError("You must upload at least one image");
if (formData.regularPrice < formData.discountPrice)
  return setError("Discount price must be lower than regular price");
    // Ensure user is logged in
    if (!currentUser || !currentUser._id) {
      return setError("You must be logged in to create a listing.");
    }
  
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
  
      if (+formData.regularPrice < +formData.discountPrice)
        return setError("Discount price must be lower than regular price");
  
      setLoading(true);
      setError(false);
  
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id, // Make sure this is defined
        }),
      });
  
      const data = await res.json();
      setLoading(false);
  
      if (data.success === false) {
        setError(data.message);
        return;
      }
  
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  // console.log("Current User:", currentUser);

  return (
    <main className="p-3 max-w-4xl mx-auto ">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create Listing
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          {/* Text Inputs */}
          {[
            {
              id: "name",
              placeholder: "Name",
              min: 10,
              max: 62,
              required: true,
            },
            { id: "description", placeholder: "Description", required: true },
            { id: "address", placeholder: "Address", required: true },
          ].map(({ id, placeholder, min, max, required }) => (
            <input
              key={id}
              type="text"
              placeholder={placeholder}
              className="border p-3 rounded-lg"
              id={id}
              minLength={min}
              maxLength={max}
              required={required}
              value={formData[id]}
              onChange={handleChange}
            />
          ))}

          {/* Sale & Rent (Radio Button Behavior) */}
          <div className="flex gap-6 flex-wrap">
            {[
              { id: "sale", label: "Sell", value: "sale" },
              { id: "rent", label: "Rent", value: "rent" },
            ].map(({ id, label, value }) => (
              <div key={id} className="flex gap-2">
                <input
                  type="checkbox"
                  id={id}
                  className="w-5"
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, type: value }))
                  }
                  checked={formData.type === value}
                />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Other Checkboxes */}
          <div className="flex gap-6 flex-wrap">
            {[
              { id: "parking", label: "Parking spot" },
              { id: "furnished", label: "Furnished" },
              { id: "offer", label: "Offer" },
            ].map(({ id, label }) => (
              <div key={id} className="flex gap-2">
                <input
                  type="checkbox"
                  id={id}
                  className="w-5"
                  onChange={handleChange}
                  checked={formData[id]}
                />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Number Inputs */}
          <div className="flex flex-wrap gap-6">
            {[
              { id: "bedrooms", label: "Beds", min: 1, max: 10 },
              { id: "bathrooms", label: "Baths", min: 1, max: 10 },
              {
                id: "regularPrice",
                label: "Regular price ($ / month)",
                min: 50,
                max: 10000000,
              },
              {
                id: "discountPrice",
                label: "Discount price ($ / month)",
                min: 0,
                max: 10000000,
              },
            ].map(({ id, label, min, max }) => (
              <div key={id} className="flex items-center gap-2">
                <input
                  type="number"
                  id={id}
                  min={min}
                  max={max}
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                  value={formData[id]}
                  onChange={handleChange}
                />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              {" "}
              The first image will be the cover (max 6)
            </span>
          </p>

          {/* Upload Button */}
          {formData.imageUrls.length < 6 ? (
            <button
              type="button"
              className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full text-center"
              onClick={() => widgetRef.current?.open()}
            >
              Upload Images
            </button>
          ) : (
            <p className="text-red-500">Max 6 images allowed.</p>
          )}

          {/* Display Uploaded Images */}
          <div className="flex flex-wrap gap-2">
            {formData.imageUrls.map((file, index) => (
              <div key={index} className="relative w-20 h-20">
                <img
                  src={file}
                  alt={`Uploaded ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      imageUrls: prevData.imageUrls.filter(
                        (_, i) => i !== index
                      ),
                    }))
                  }
                  className="absolute top-0 right-0 bg-red-600 text-white text-xs p-1 rounded-full"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading?'creating...' :'Create Listing' }
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </main>
  );
}
