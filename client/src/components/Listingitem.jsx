import React from 'react'
import { Link } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
export default function Listingitem({listing}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
       <Link to={`/listing/${listing._id}`}>
       <img src = {listing.imageUrls[0] || "https://media.istockphoto.com/id/1992465937/photo/aerial-view-of-colorful-sunset-in-gurgaon-haryana-india.jpg?s=612x612&w=is&k=20&c=xTUupnj4duYz4p4sjmwM7YHhC1se-XcBLG-tH_bVFpg="}  alt="listing cover"
       className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale  duration-300'
       />
       <div className='p-3 flex flex-col gap-2 w-full'>
        <p className='truncatetext-lg font-semibold text-slate-700'>{listing.name}</p>

        <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className="line-clamp-3 text-gray-600">{listing.description}</p>      
          <p className="text-lg font-semibold text-gray-800">
  ${listing.offer ? listing.discountPrice : listing.regularPrice.toLocaleString('en-US')}
  {listing.type === 'rent' ? '/month' : ''}
</p>
<div className='text-slate-700 flex gap-4'>
<div className='font-bold text-xs'>
{listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}



</div>
<div className='font-bold text-xs'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
</div>

           </div>
       </Link>
    </div>
  )
}

