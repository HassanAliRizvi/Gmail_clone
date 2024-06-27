// Example component using Tailwind CSS classes
import React from 'react';

function App() {
  return (
    <div className="bg-white p-4">
      <h1 className="text-3xl font-bold text-center">Hello Tailwind CSS!</h1>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
}

export default App;