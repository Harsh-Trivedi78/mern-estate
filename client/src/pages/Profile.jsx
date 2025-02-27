import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserFailure, deleteUserSuccess, signOutUserStart } from "../redux/user/userSlice";
import {Link} from 'react-router-dom';
export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    avatar: currentUser.avatar,
  });const [file, setFile] = useState(undefined);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };



  const handleFileUpload = async (file) => {
    if (!file) {
      console.error("No file selected");
      return;
    }
  
    const formData = new FormData();
    formData.append("UPLOADCARE_PUB_KEY", "c8dd17b6f75e6110c9ee"); // Your Public Key
    formData.append("UPLOADCARE_STORE", "auto"); // Store file automatically
    formData.append("file", file);
  
    try {
      const response = await fetch("https://upload.uploadcare.com/base/", {
        method: "POST", // Ensure this is POST
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      
      if (!data.file) {
        throw new Error("No file key returned from Uploadcare");
      }
  
      const uploadedImageUrl = `https://ucarecdn.com/${data.file}/`;
      console.log("Uploaded Image URL:", uploadedImageUrl);
  
      // Update the avatar in the formData state
      setFormData((prev) => ({
        ...prev,
        avatar: uploadedImageUrl,
      }));
  
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      console.error("Sign out failed", error);
    }
  };
const handleShowListings = async () => {

try {
  setShowListingsError(false);
  const res = await fetch(`/api/user/listings/${currentUser._id}`);
  const data = await res.json();
  if (data.success === false) {
    setShowListingsError(true);
    return;
  }
  setUserListings(data);
} catch (error) {
  setShowListingsError(true);
}




}
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
  type="file"
  ref={fileRef}
  hidden
  accept="image/*"
  onChange={(e) => handleFileUpload(e.target.files[0])}
/>

        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar}
          alt="Profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          placeholder="Username"
          defaultValue={currentUser.username}
          id="username"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          defaultValue={currentUser.email}
          id="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading || uploading}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading || uploading ? "Loading..." : "Update"}
        </button>

        <Link  className="bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95" to = {"/create-listing"}>
        Create Listing 
        </Link>
      </form>
      <div className="flex justify-between mt-5">
        <button
          onClick={handleDeleteUser}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 cursor-pointer"
        >
          Delete account
        </button>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 cursor-pointer"
        >
          Sign Out
        </button>
      </div>
      <p className="text-green-700 mt-5">
        {updateSuccess ? "User updated successfully" : "Updating user..."}
      </p>
      <button onClick={handleShowListings} className="bg-green-700 text-white  mt-5 w-full rounded-full px-6 py-2 border border-green-700">
 Show Listings
 
</button>
<p className='text-red-700 mt-5'>
        {showListingsError ? 'Error showing listings' : ''}
      </p>
      {userListings && userListings.length > 0 && (
  <div className="mt-5 space-y-4">
  <h1 className="text-center mt-7 text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text drop-shadow-lg">
  Your Listings
</h1>

    {userListings.map((listing) => (
      <div
        key={listing._id}
        className="flex justify-between items-center border-b border-gray-700 py-3 gap-4 bg-white p-4 rounded-lg shadow-md"
      >
        <Link to={`/listing/${listing._id}`}>
          <img
            src={listing.imageUrls}
            alt="Listing Cover"
            className="h-16 w-16 object-contain"
          />
        </Link>
        <Link
          className="text-blue-700 font-semibold hover:underline truncate flex-1"
          to={`/listing/${listing._id}`}
        >
          <p>{listing.name}</p>
        </Link>
        <div className="flex flex-col items-center space-y-2">
          <button className="bg-red-700 text-white px-4 py-2 rounded-full border border-red-700">
            Delete
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-full border border-green-700">
            Edit
          </button>
        </div>
      </div> 
     ))}
       </div>
     )}
     </div>
    );
  }