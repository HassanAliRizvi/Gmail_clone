import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaRegEnvelope, FaReply, FaTrash, FaArchive } from "react-icons/fa"; // Example icons to display on hover
import { MdArchive } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";



const EmailRow = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='relative flex justify-between items-center p-4 hover:bg-gray-200 cursor-pointer' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center space-x-3 cursor-pointer'>
        <BsThreeDotsVertical />
        <button>
          <MdCheckBoxOutlineBlank />
        </button>
        <button className='hover:text-yellow-500'>
          <CiStar className='star-icon' />
        </button>
        <h4>User_Name</h4>
      </div>
      <div className='flex-grow'>
        <h4 className='text-center'>Subject</h4>
      </div>
      <div className='flex items-center space-x-2'>
        <h4 className='justify-end'>Time</h4>
      </div>
      {isHovered && (
        <div className='absolute right-0 top-0 h-full flex items-center space-x-2 p-4 bg-gray-100'>
          <MdArchive className='hover:text-blue-500 cursor-pointer'/>
          <IoMdMailOpen className='hover:text-blue-500 cursor-pointer'/>
          <FaReply className='hover:text-blue-500 cursor-pointer'/>
          <FaArchive className='hover:text-blue-500 cursor-pointer' />
        </div>
      )}
    </div>
  );
}

const Body = () => {
  return (
    <div className='rounded-xl col-span-full p-6'>
      {/* Your body content goes here */}
      <EmailRow />
      <EmailRow />
      <EmailRow />
    </div>
  );
}

export default Body;


