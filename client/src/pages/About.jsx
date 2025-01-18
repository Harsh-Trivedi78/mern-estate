import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-6 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to <span className="font-semibold text-blue-600">Estate Finder</span>, your trusted partner in the real estate journey. Whether you're searching for your dream home, exploring investment opportunities, or looking to sell a property, we are here to make the process seamless, efficient, and rewarding.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600">
            We are a dedicated team passionate about bridging the gap between property seekers and sellers. With a deep understanding of the real estate market, we aim to provide a reliable platform that empowers users to find, buy, and sell properties with ease and confidence.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is to redefine the real estate experience by making it accessible, transparent, and hassle-free for everyone. We believe in connecting people with properties that truly match their aspirations.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Extensive Property Listings:</strong> Explore a wide variety of properties, including residential homes, apartments, commercial spaces, and more.</li>
            <li><strong>Smart Search Features:</strong> Find the perfect property effortlessly with advanced filters like location, budget, size, and amenities.</li>
            <li><strong>Interactive Property Details:</strong> Get comprehensive property information, including high-quality images, detailed descriptions, and pricing.</li>
            <li><strong>User-Friendly Interface:</strong> Navigate through a clean and intuitive platform designed to make your real estate journey enjoyable and efficient.</li>
            <li><strong>Seamless Communication:</strong> Connect directly with property owners or agents to get the answers you need quickly.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Transparency:</strong> Clear, reliable information on every property listed.</li>
            <li><strong>Convenience:</strong> Find everything you need to make informed decisions, all in one place.</li>
            <li><strong>Customer Focused:</strong> Your satisfaction is our priority, and we are here to guide you every step of the way.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Start Your Journey Today</h3>
          <p className="text-gray-600">
            Discover the possibilities with <span className="font-semibold text-blue-600">Estate Finder</span> and turn your property dreams into reality. Whether you're a buyer, seller, or renter, we are committed to helping you achieve your goals with ease.
          </p>
        </div>
      </div>
    </div>
  );
}
