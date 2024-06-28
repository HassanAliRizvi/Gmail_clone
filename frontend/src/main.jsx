import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming you have some global styles in index.css
import Navbar from './React components/Navbar';
import Body from './React components/Body';
import Sidebar from './React components/Sidebar';
import Email from './React components/Email';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className='grid grid-cols-4'>
        <Sidebar />
        <div className="col-span-3 bg-white">
          <Body />
          <Email/>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
