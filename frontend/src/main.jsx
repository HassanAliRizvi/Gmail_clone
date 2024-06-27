import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './React components/Navbar'
// main.js or main.jsx


const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
