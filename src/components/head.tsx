function Head() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center md:text-left">
          <span className="font-bold text-2xl sm:text-4xl text-violet-600">N</span>avjot{" "}
          <span className="font-bold text-2xl sm:text-4xl text-violet-600">K</span>apatia
        </h1>

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-end">
          <a
            href="/Resume.pdf"
            download
            className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base hover:bg-blue-700 transition"> Download Resume </a>
            
          <a
            href="#contact"
            className="bg-gray-700 text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Head;
