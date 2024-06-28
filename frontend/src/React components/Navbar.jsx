import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInbox } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdDrafts } from "react-icons/md";
import { MdFilterList } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { BsGrid3X3Gap } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='bg-white-200 w-full'>
      <div className='pt-6 space-y-4'>
        <div className='py-4 px-5 flex items-center w-full'>
          <RxHamburgerMenu className='cursor-pointer mr-2' />
          <img
            src="https://image.similarpng.com/very-thumbnail/2020/12/Gmail-logo-design-on-transparent-background-PNG.png"
            alt="Gmail Logo"
            className="h-8 w-auto"
          />
          <h3 className='ml-2'>Gmail</h3>
          <div className='flex-grow mx-4'>
            <div className='rounded-full bg-gray-200 px-4 py-2 flex items-center space-x-4'>
              <button className='hover:bg-gray-300 rounded-xl p-1'>
                <CiSearch className="text-gray-500" />
              </button>
              <input
                type="text"
                placeholder="Search mail"
                className="bg-transparent outline-none text-gray-700 flex-grow"
              />
              <button className='hover:bg-gray-300 rounded-xl p-1'>
                <MdFilterList className='justify-end' />
              </button>
            </div>
          </div>
          <div className='flex space-x-2 ml-auto'>
            <button className='hover:bg-gray-300 rounded-xl p-1'>
              <FaRegQuestionCircle />
            </button>
            <button className='hover:bg-gray-300 rounded-xl p-1'>
              <FaGear />
            </button>
            <button className='hover:bg-gray-300 rounded-xl p-1'>
              <BsGrid3X3Gap />
            </button>
          </div>
        </div>

  
      </div>
    </nav>
  );
}

export default Navbar;




