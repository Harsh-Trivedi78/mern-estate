import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';
// import {Navigation } from 'swiper' ;
import Listingitem from '../components/Listingitem';
export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
console.log(saleListings);

 useEffect(() => {
const fetchOfferListings = async () => {
  try {
    const res = await fetch('/api/listing/get?offer=true&limit=4');
    const data = await res.json();
    setOfferListings(data);
    fetchRentListings();
  } catch (error) {
    console.log(error);
  }
}

const fetchRentListings = async () => {
  try {
    const res = await fetch('/api/listing/get?type=rent&limit=4');
    const data = await res.json();
    setRentListings(data);
    fetchSaleListings();
  } catch (error) {
    console.log(error);
  }

}
const fetchSaleListings = async () => {
  try {
      const res = await fetch('/api/listing/get?type=sale&limit=4');
      const data = await res.json();  
      setSaleListings(data);
  } catch (error) {
    log(error);
  }
}



fetchOfferListings();
 },[])

  return (
    <div  >
     {/* top */}
<div className='flex flex-col gap-10 p-28 px-5 max-w-7xl mx-auto  relative bg-cover bg-right  bg-no-repeat'
    style={{
      backgroundImage: "url('https://i.pinimg.com/736x/6b/34/a5/6b34a55175a40036697f51ddeb1895dc.jpg')",
      backgroundSize: 'contain',
      backgroundPosition: 'right center', // Moves the image to the right
      backgroundRepeat: 'no-repeat',
      width: '100%',
    }}

    
    >
    <h1 className='text-blue-800 font-extrabold text-3xl lg:text-6xl'>
      Find your Next <span>Perfect</span> 
      <br />
      Place With Ease.
    </h1>
    <div  className='text-black text-lg font-semibold sm:text-sm'>
    From cozy apartments to luxury villas, EstateFinder brings you the 
    <br />
    best real estate options in one place.
    <br/>
    We have a wide range of properties to suit your needs.
    </div>
    <Link 
  to={"/search"}  
  className="text-xs sm:text-sm text-white bg-blue-800 font-bold px-4 py-2 rounded-full hover:bg-blue-900 transition w-fit"
>
  More Info
</Link>


    </div>






     {/* swiper */}
     <Swiper navigation 
     >
  {offerListings &&
    offerListings.length > 0 &&
    offerListings.map((listing) => (
      <SwiperSlide key={listing._id}>
        <div
        style={{
          background: `url(${listing.imageUrls[0]}) center no-repeat`,
          backgroundSize: 'cover',
          maxWidth: '1200px', // Adjust width as needed
          height: '500px',  // Adjust height to shrink the area
          margin: '0 auto', // Centers the container
        }}
        
        
           className='h-[500px]'
        ></div>
      </SwiperSlide>
    ))}
</Swiper>




     {/* listingresults for offer and sale */}
    
     <div className='max-w-9xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-4xl font-extrabold text-slate-600'>Recent offers</h2>
              <Link className='text-lg font-semibold text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <Listingitem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-4xl font-extrabold text-slate-600'>Recent places for rent</h2>
              <Link className='text-lg font-semibold text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <Listingitem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-4xl font-extrabold text-slate-600'>Recent places for sale</h2>
              <Link className='text-lg font-semibold text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <Listingitem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    
    
    
    
    </div>
  )
}
// className="relative h-screen bg-cover bg-center flex items-center justify-center px-4"
//       style={{ backgroundImage: "url('/background-image.png')" }}