import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './React components/Navbar'
import Body from './React components/Body';
import Sidebar from './React components/Sidebar';
import Email from './React components/Email'; // Assuming you have an Email component
import Compose from './React components/Compose';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className='order-first grid grid-cols-8'>
        <Sidebar />
        <div className="col-span-7 bg-white rounded-xl">
          <Body />
          <Email />
        </div>
        <Routes>
            <Route path="/compose" element={<Compose />} />
            {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

