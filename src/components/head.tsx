// import React from 'react';

function Head() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-xl z-50">
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center '>

        <h1 className="text-2xl font-bold">
      <span className= 'font-bold text-4xl text-violet-600'>N</span>avjot{" "}
      <span className= 'font-bold text-4xl text-violet-600'>K</span>apatia
      </h1>

      <div className="fixed top-4 right-6 flex gap-4 z-50">
        <a href='/Resume.pdf' download className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Download Resume
        </a>
        <a href="#contact"className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Contact Me
        </a>
      </div>
    </div>
    </div>
  );
}

export default Head;
