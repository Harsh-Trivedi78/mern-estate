import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 py-16 px-6 md:px-20 lg:px-40">

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About <span className="text-blue-600">Estate Finder</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Welcome to Estate Finder, your one-stop destination for seamless property transactions. 
          Whether you're buying, selling, or investing, we bring you an intuitive platform that 
          simplifies the real estate journey with trust and efficiency.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-12 p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Estate Finder is a dedicated real estate platform designed to empower buyers, sellers, 
            and investors with the tools they need to make informed decisions. Our expert team 
            curates listings with transparency, ensuring every transaction is smooth and secure.
          </p>
        </div>

        <div className="mb-12 p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a future where real estate is accessible to all. By integrating smart technology, 
            verified listings, and expert guidance, Estate Finder aims to redefine how people interact with 
            property markets, making transactions seamless and rewarding.
          </p>
        </div>

        <div className="mb-12 p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">🏡</span>
              <p><strong>Extensive Listings:</strong> Browse thousands of residential, commercial, and rental properties, all verified for authenticity.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">🔍</span>
              <p><strong>Smart Search:</strong> Utilize our AI-powered filters to find properties based on location, budget, size, and amenities.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">📸</span>
              <p><strong>Interactive Details:</strong> Get high-resolution images, 360-degree virtual tours, and comprehensive property insights.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">💬</span>
              <p><strong>Seamless Communication:</strong> Connect directly with sellers, buyers, and agents via chat and secure messaging.</p>
            </div>
          </div>
        </div>

        <div className="mb-12 p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-2xl">✅</span>
              <p><strong>Transparency:</strong> Every listing is thoroughly verified for accuracy, ensuring no hidden surprises.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-2xl">⚡</span>
              <p><strong>Convenience:</strong> A user-friendly interface, real-time alerts, and instant bookings make property hunting stress-free.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-2xl">💡</span>
              <p><strong>Customer-Centric:</strong> We prioritize user satisfaction with personalized recommendations and expert advice.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Start Your Journey Today</h3>
          <p className="text-gray-700 mb-6">
            Explore properties with <span className="font-semibold text-blue-600">Estate Finder</span> and unlock endless possibilities in real estate.
          </p>
          <Link to="/search">
  <button 
    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg 
    hover:bg-blue-700 transition duration-300"
  >
    Explore Properties
  </button>
</Link>
        </div>
      </div>
    </div>
  );
}
