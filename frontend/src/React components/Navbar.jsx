import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInbox } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdDrafts } from "react-icons/md";
import { MdFilterList } from "react-icons/md";



const Navbar = () => {
  return (
    <nav className='bg-white-200'>
      <div className='pt-6 space-y-4'>

        <div className='py-4 px-5 flex items-center space-x-3'>
          <RxHamburgerMenu className='cursor-pointer  mr-2' />
          <img
            src="https://image.similarpng.com/very-thumbnail/2020/12/Gmail-logo-design-on-transparent-background-PNG.png"
            alt="Gmail Logo"
            className="h-8 w-auto"
          />
          <h3>Gmail</h3>
          <div className=' justify-items-center ml-10 rounded-full bg-gray-50 px-10 py-2 flex items-center space-x-8'>
            <button className='hover:bg-gray-300 rounded-xl p-1'><CiSearch className="text-gray-500" /></button>
            <input
              type="text"
              placeholder="Search mail"
              className="bg-transparent flex-10 outline-none text-gray-700"
            />
            <button className='hover:bg-gray-300 rounded-xl p-1'><MdFilterList className='justify-end'/></button>
          </div>
        </div>



          <div className='flow-root m-5'>
            <div className='flex-col space-y-2'>

              <button className='py-1 px-9 flex items-center bg-gray-100  hover:bg-gray-300 rounded-xl'>
                <FaInbox className='mr-2 hover:bg-sky-700' />
                <h4>Inbox</h4>
              </button>

              <button className='py-1 px-9 flex items-center  hover:bg-gray-300 rounded-xl'>
                <CiStar className='mr-2' />
                <h4>Starred</h4>
              </button>

              <button className='py-1 px-9 flex items-center hover:bg-gray-300 rounded-xl'>
                <IoSend className='mr-2' />
                <h4>Sent</h4>
              </button>

              <button className='py-1 px-9 flex items-center hover:bg-gray-300 rounded-xl'>
                <MdDrafts className='mr-2' />
                <h4>Drafts</h4>
              </button>

            </div>
          </div>

      </div>

    </nav>
  )
}

export default Navbar;
