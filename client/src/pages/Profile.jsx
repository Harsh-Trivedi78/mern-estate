import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useState } from 'react';
import {app} from '../firebase';
import { updateUserStart, updateUserSuccess , updateUserFailure, deleteUserFailure, deleteUserSuccess, signOutUserStart } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";







  // firebase storage
  // allow read;
  // allow write: if
  // request.resource.size < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')
  // ;

  export default function Profile() {
    const fileRef = useRef(null);
    const { currentUser ,loading , error } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
      username: currentUser.username,
      email: currentUser.email,
      avatar: currentUser.avatar
    });
    const [updateSuccess, setUpdateSuccess] = useState(false);





    const dispatch = useDispatch();

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = async  (e) => {
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
        if (data.success == false){
          dispatch(updateUserFailure(data.message));
          return;
        }
        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      } catch (error) {
        dispatch(updateUserFailure(error.message));
        
      
      }
    }
  const handleDeleteUser = async () => {
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success == false){
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
    // console.log(formData);
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success == false){
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      
    }
  }
    return (
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="file" ref={fileRef} hidden accept="image/*" />
  
          <img
            onClick={() => fileRef.current.click()}
            src={currentUser.avatar}
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
            placeholder="email"
            defaultValue={currentUser.email}
            id="email"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <button disabled={loading} className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
            {loading ? "Loading..." : "Update"}
          </button>
        </form>
        <div className="flex justify-between mt-5">
          <button  onClick={handleDeleteUser} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 cursor-pointer">
            Delete account
          </button>
          <button onClick={handleSignOut} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 cursor-pointer">
            Sign Out
          </button>
        </div>
        <p className="text-green-700 mt-5">
  {updateSuccess ? 'Success' : 'User is Updated Successfully'}
</p>


  

      </div>
    );
  }
