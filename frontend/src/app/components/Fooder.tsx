import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'; 
import { FaWhatsapp } from 'react-icons/fa6';

export const Fooder = () => {
  return (
    <div className='w-full h-auto grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-6 px-4 py-10'>
     
      <div className='flex items-center text-2xl font-bold justify-center'>
        ParkScape Adventures
      </div>

      <div className='flex items-center justify-center'>
        <ul className='flex gap-6 text-lg'>
          <li>Aboud Camp</li>
          <li>Events</li>
          <li>Animals</li>
          <li>FAQs</li>
          <li>The Team</li>
        </ul>
      </div>

      <div className='flex items-center justify-center gap-6 text-3xl'>
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
        <FaWhatsapp />
      </div>
    </div>
  );
};
