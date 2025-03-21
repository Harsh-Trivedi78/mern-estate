import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [LandLord, setLandLord] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    const fetchLandLord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandLord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandLord();
  }, [listing.userRef]);
  return (
    <>
      {LandLord && (
        <div className=" flex flex-col gap-2
        bg-white p-5 rounded-lg shadow-lg">
          <p>
            Contact <span className="font-semibold">{LandLord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows={2}
            value={message}
            onChange={onChange}
            placeholder="Enter Your Message Here..."
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          ></textarea>
          <Link to={`mailto:${LandLord.email}?subject=Regarding ${listing.name}&body=${message}`} 
          className="bg-blue-500 text-white text-center py-2 rounded-lg"
          
          >
    Send Message
</Link>

        </div>
      )}
    </>
  );
}
