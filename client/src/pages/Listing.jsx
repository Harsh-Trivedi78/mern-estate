import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {useSelector } from "react-redux";
// import { currentUser } from "../utils";
import { Navigation, Autoplay} from "swiper/modules";
import "swiper/css/bundle";
import {
    FaBath,
    FaBed,
    FaChair,
    FaMapMarkedAlt,
    FaMapMarkerAlt,
    FaParking,
    FaShare,
  } from 'react-icons/fa';
import Contact from "../components/Contact";
export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const {currentUser} = useSelector((state) => state.user);
  const [copied, setCopied] = useState(false);
  const [contact , setContact] = useState(false);
  
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`); // Fixed API URL

        const data = await res.json();

        if (data.success == false) {
          setError(true);
          setLoading(false);
          return;
        }

        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchListing();
  }, [params.listingId]); // Added dependency
  // console.log(loading);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">Something Went Wrong!.</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper 
          navigation={true} // Enable navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          
          modules={[Navigation,Autoplay]} // Ensure Navigation module is included
          className="mySwiper"
          
          
          >
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
              <div
                className="h-[550px] w-full"
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              ></div>
            </SwiperSlide>
            
            ))}
          </Swiper>
          <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
            <FaShare
            className="text-slate-500"
            onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            }}
            
            
            />
          </div>
          {copied && (
            <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2'>Link Copied</p>
          )}
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
  <p className="text-2xl font-semibold">
    {listing.name} - ${" "}
    {listing.offer
      ? listing.discountPrice.toLocaleString("en-US")
      : listing.regularPrice.toLocaleString("en-US")}
    {listing.type === "rent" && " / month"}
  </p>

  <p className="flex items-center gap-2 text-slate-600 text-sm">
    <FaMapMarkerAlt className="text-green-700" />
    {listing.address}
  </p>

  {/* Fix: Wrap these buttons in a flex container */}
  <div className="flex items-center gap-4">
    <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
      {listing.type === "rent" ? "For Rent" : "For Sale"}
    </p>
    {listing.offer && (
      <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
        ${+listing.regularPrice - +listing.discountPrice} OFF
      </p>
    )}
  </div>

  <p className="text-slate-800">
    <span className="font-semibold text-black">Description - </span>
    {listing.description}
  </p>

  <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
    <li className="flex items-center gap-1 whitespace-nowrap">
      <FaBed className="text-lg" />
      {listing.bedrooms > 1 ? `${listing.bedrooms} beds ` : `${listing.bedrooms} bed `}
    </li>
    <li className="flex items-center gap-1 whitespace-nowrap">
      <FaBath className="text-lg" />
      {listing.bathrooms > 1 ? `${listing.bathrooms} baths ` : `${listing.bathrooms} bath `}
    </li>
    <li className="flex items-center gap-1 whitespace-nowrap">
      <FaParking className="text-lg" />
      {listing.parking ? "Parking spot" : "No Parking"}
    </li>
    <li className="flex items-center gap-1 whitespace-nowrap">
      <FaChair className="text-lg" />
      {listing.furnished ? "Furnished" : "Unfurnished"}
    </li>
  </ul>
  {currentUser && listing.userRef !== currentUser._id && !contact && (
  <button onClick={() =>setContact(true)} className="bg-green-900 text-white text-lg p-2 rounded-md mt-4">
  Contact LandLord!
</button>

  )}
  {contact && <Contact listing ={listing}/>}

</div>

        </div>
      )}

      {/* <p>{listing?.description}</p> */}
    </main>
  );
}
