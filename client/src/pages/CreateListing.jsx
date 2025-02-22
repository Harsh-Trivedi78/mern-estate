import React, { useState, useRef, useEffect } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  });

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    if (!window.cloudinary) {
      console.error("Cloudinary widget is not loaded. Make sure to include the script.");
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
          console.log("Upload successful:", result.info);
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
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Create Listing</h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            required
            value={formData.address}
            onChange={handleChange}
          />

          <div className="flex gap-6 flex-wrap">
            {["sale", "rent", "parking", "furnished", "offer"].map((field) => (
              <div key={field} className="flex gap-2">
                <input
                  type="checkbox"
                  id={field}
                  className="w-5"
                  checked={formData[field]}
                  onChange={handleChange}
                />
                <span>{field.charAt(0).toUpperCase() + field.slice(1)}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { id: "bedrooms", label: "Beds", min: 1, max: 10 },
              { id: "bathrooms", label: "Baths", min: 1, max: 10 },
              { id: "regularPrice", label: "Regular price ($ / month)", min: 50, max: 10000000 },
              { id: "discountPrice", label: "Discount price ($ / month)", min: 0, max: 10000000 },
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
            <span className="font-normal text-gray-600 ml-2"> The first image will be the cover (max 6)</span>
          </p>

          <div className="uploadWrapper">
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
          </div>

          {/* Display Uploaded Images */}
          <div className="flex flex-wrap gap-2">
            {formData.imageUrls.map((file, index) => (
              <div key={index} className="relative w-20 h-20">
                <img src={file} alt={`Uploaded ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      imageUrls: prevData.imageUrls.filter((_, i) => i !== index),
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
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
