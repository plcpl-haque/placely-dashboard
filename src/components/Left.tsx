import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { RxDashboard } from 'react-icons/rx';
import { IoMdNotificationsOutline, IoIosSearch } from 'react-icons/io';
import { RiMessage2Line, RiCompass3Line } from 'react-icons/ri';
import { FaAngleDown, FaPlaceOfWorship, FaAngleRight } from 'react-icons/fa';
import { MdOutlineVideogameAsset, MdWork, MdWorkspacesOutline } from 'react-icons/md';
import { FcInspection } from 'react-icons/fc';
import { AiOutlineTransaction } from 'react-icons/ai';

const dashBoardMenu = [
    {
      icon: RxDashboard,
      text: 'Dashboard',
    },
    {
      icon: IoMdNotificationsOutline,
      text: 'Notifications',
    },
    {
      icon: RiMessage2Line,
      text: 'Messages',
    },
  ]
  
  const secondaryMenu = [
    {
      icon: FaPlaceOfWorship,
      text: 'Places',
    },
    {
      icon: RiCompass3Line,
      text: 'Compilance',
    },
    {
      icon: MdOutlineVideogameAsset,
      text: 'Assets',
    },
    {
      icon: FcInspection,
      text: 'Inspections',
    },
    {
      icon: MdWork,
      text: 'Work Requests',
    },
    {
      icon: MdWorkspacesOutline,
      text: 'Work Orders',
    },
    {
      icon: AiOutlineTransaction,
      text: 'Transactions',
    },
  ]
  
  const buyersAndSellers = [
    {
      name: 'Pet Stock',
      designation: 'Buyer'
    },
    {
      name: 'Sevana',
      designation: 'Buyer'
    },
    {
      name: 'Sewer Surgeon',
      designation: 'Seller'
    },
    {
      name: 'Shindler',
      designation: 'Seller'
    },
  ]
  

const Left = () => {
    return (
        <div className='w-80 border-r border-slate-300 text-center py-8'>
        {/* Logo section  */}
        <div className='flex gap-2 items-center justify-start pl-20'>
          <HiOutlineHome className='text-3xl text-orange-400'/>
          <h1 className='font-bold text-2xl'>Placely</h1>
        </div>

        {/* Menu Section  */}
        <div className='py-8 pl-20 flex flex-col gap-4'>
        {
          dashBoardMenu.map((m,index) => <a key={index} href="#">
            <div className='flex gap-2 items-center justify-start'>
            <m.icon className='text-xl'/>
            <h4 className='text-lg'>{m.text}</h4>
          </div>
          </a>)
        }
        </div>

        <hr className='w-40 m-auto'/>

        <div className='flex gap-2 items-center justify-start py-6 pl-20'>
          <IoIosSearch className='text-xl absolute left-20'/>
          <input type='text' className='w-40 border'/>
        </div>

        <div className='flex gap-2 items-center justify-start py-0 px-12'>
          <a href="#"><FaAngleDown className='text-xl'/></a>
          <span className='bg-gray-400	w-6 h-6 border rounded-full'></span>
          <div className='relative top-2 text-left'>
            <h4 className='text-xl'>Dexus</h4>
            <p className='text-sm text-gray-500'>Buyer</p>
          </div>
        </div>

        {/* Menu Second Part  */}
        <div className='pt-8 pb-0 pl-20 flex flex-col gap-4'>
        {
          secondaryMenu.map((m,index) => <a key={index} href="#">
            <div className='flex gap-2 items-center justify-start'>
            <m.icon className='text-xl'/>
            <h4 className='text-lg'>{m.text}</h4>
          </div>
          </a>)
        }
        </div>

        <div className='pt-2 pb-8 px-12 flex flex-col gap-2'>
        {
          buyersAndSellers.map((m,index) => <div key={index
          } className='flex gap-2 items-center justify-start py-0'>
          <a href="#"><FaAngleRight className='text-xl'/></a>
          <span className='bg-gray-400	w-6 h-6 border rounded-full'></span>
          <div className='relative top-2 text-left'>
            <h4 className='text-xl'>{m.name}</h4>
            <p className='text-sm text-gray-500'>{m.designation}</p>
          </div>
        </div>)
        }
        </div>

      </div>
    );
};

export default Left;