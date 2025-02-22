import React from "react";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 py-16 px-6 md:px-20 lg:px-40">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About <span className="text-blue-600">Estate Finder</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Your trusted partner in real estate. Whether you're buying, selling, or investing, 
          we make the process smooth, transparent, and rewarding.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-12 p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            We are a passionate team bridging the gap between property seekers and sellers. 
            Our platform empowers users to explore, buy, and sell properties with confidence.
          </p>
        </div>

        <div className="mb-12 p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To redefine real estate by making it accessible, transparent, and hassle-free. 
            We connect people with properties that match their aspirations.
          </p>
        </div>

        <div className="mb-12 p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">🏡</span>
              <p><strong>Extensive Listings:</strong> Find a variety of homes, apartments, and commercial spaces.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">🔍</span>
              <p><strong>Smart Search:</strong> Advanced filters to match location, budget, and amenities.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">📸</span>
              <p><strong>Interactive Details:</strong> High-quality images and detailed property insights.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">💬</span>
              <p><strong>Seamless Communication:</strong> Directly connect with owners and agents.</p>
            </div>
          </div>
        </div>

        <div className="mb-12 p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-2xl">✅</span>
              <p><strong>Transparency:</strong> Reliable, clear property details.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-2xl">⚡</span>
              <p><strong>Convenience:</strong> Everything you need, all in one place.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-2xl">💡</span>
              <p><strong>Customer-Centric:</strong> Your success is our priority.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Start Your Journey Today</h3>
          <p className="text-gray-700 mb-6">
            Discover properties with <span className="font-semibold text-blue-600">Estate Finder</span> 
            and turn your dreams into reality.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg 
          hover:bg-blue-700 transition duration-300">
            Explore Properties
          </button>
        </div>
      </div>
    </div>
  );
}
