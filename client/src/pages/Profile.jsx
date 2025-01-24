import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useState } from 'react';








  // firebase storage
  // allow read;
  // allow write: if
  // request.resource.size < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')
  // ;



export default function Profile() {
  const fileRef = useRef(null);

  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7"> Profile</h1>
      <form className="flex flex-col gap-4">
      <input type="file" ref={fileRef} hidden accept="image/*" />

        <img onClick={() => fileRef.current.click()}
          src={currentUser.avatar}
          alt="Profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 "
        />
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 cursor-pointer">
          Delete account
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 cursor-pointer">
          Sign Out
        </button>
      </div>
    </div>
  );
}
