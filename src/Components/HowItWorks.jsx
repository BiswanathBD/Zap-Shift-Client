import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { PiMoneyThin } from 'react-icons/pi';
import { TfiHome } from 'react-icons/tfi';

const HowItWorks = () => {
  return (
    <div className='my-16'>
      <h3 className="text-xl font-bold mb-4">How it Works</h3>

      <div className='grid grid-cols-4 gap-10'>
        <div className='flex flex-col gap-2 bg-white p-8 rounded-2xl'>
          <CiDeliveryTruck size={40} color='#bef264'/>
          <p className='font-semibold'>Booking Pick & Drop</p>
          <p className='text-sm text-gray-500'>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>

        <div className='flex flex-col gap-2 bg-white p-8 rounded-2xl'>
          <PiMoneyThin size={40} color='#bef264'/>
          <p className='font-semibold'>Cash On Delivery</p>
          <p className='text-sm text-gray-500'>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>

        <div className='flex flex-col gap-2 bg-white p-8 rounded-2xl'>
          <TfiHome size={40} color='#bef264'/>
          <p className='font-semibold'>Delivery Hub</p>
          <p className='text-sm text-gray-500'>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>

        <div className='flex flex-col gap-2 bg-white p-8 rounded-2xl'>
          <HiOutlineHomeModern size={40} color='#bef264'/>
          <p className='font-semibold'>Booking SME & Corporate</p>
          <p className='text-sm text-gray-500'>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;