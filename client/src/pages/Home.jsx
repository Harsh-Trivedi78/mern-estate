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
    <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
    <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
      Find your Next <span>Perfect</span> 
      <br />
      Place With Ease.
    </h1>
    <div  className='text-gray-400 text-xs sm:text-sm'>
    From cozy apartments to luxury villas, EstateFinder brings you the best real estate options in one place.
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
     <Swiper navigation>
  {offerListings &&
    offerListings.length > 0 &&
    offerListings.map((listing) => (
      <SwiperSlide key={listing._id}>
        <div
          style={{
            background: `url(${listing.imageUrls[0]}) center no-repeat`,
            backgroundSize: 'cover',
          }}
          className='h-[500px]'
        ></div>
      </SwiperSlide>
    ))}
</Swiper>




     {/* listingresults for offer and sale */}
    
     <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
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
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
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
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
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