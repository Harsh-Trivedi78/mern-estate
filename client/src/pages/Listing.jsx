import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay} from "swiper/modules";
import "swiper/css/bundle";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

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
  console.log(loading);

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
                  backgroundSize: "contain",
                }}
              ></div>
            </SwiperSlide>
            
            ))}
          </Swiper>
        </div>
      )}

      {/* <p>{listing?.description}</p> */}
    </main>
  );
}
