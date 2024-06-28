import React from 'react';
import { FaInbox } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { MdDrafts } from "react-icons/md";

const Sidebar = () => {
  return (
    
      <div className='pt-6 space-y-2 px-0'>
        <button className='py-1 px-4 flex items-center bg-gray-100 hover:bg-gray-300 rounded-xl'>
          <FaInbox className='mr-2' />
          <h4>Inbox</h4>
        </button>
        <button className='py-1 px-4 flex items-center hover:bg-gray-300 rounded-xl'>
          <CiStar className='mr-2' />
          <h4>Starred</h4>
        </button>
        <button className='py-1 px-4 flex items-center hover:bg-gray-300 rounded-xl'>
          <IoSend className='mr-2' />
          <h4>Sent</h4>
        </button>
        <button className='py-1 px-4 flex items-center hover:bg-gray-300 rounded-xl'>
          <MdDrafts className='mr-2' />
          <h4>Drafts</h4>
        </button>
      </div>
  );
}

export default Sidebar;

