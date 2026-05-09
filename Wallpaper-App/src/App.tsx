import { useEffect, useState } from "react";
import { Settings, X, LayoutGrid, Monitor, Smartphone, Square } from "lucide-react";

export default function App() {
  const [wallpapers, setWallpapers] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [orientation, setOrientation] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // shimmer Effect
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setIsLoading(true);
    const accessKey = "tcinPYMw80VSGrY0aYEskf6f54KytzFlYhRSN5xQMp0";
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}&per_page=20`;

    if (orientation !== "") {
      url += `&orientation=${orientation}`;
    }

    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        console.log("Data fetched Successfully", query, data);
        setWallpapers(data.results || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error in Data Fetching", error);
        setIsLoading(false);
      });
  }, [page, query, orientation]);

  // Search Button Logic
  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      setQuery(searchInput);
      setPage(1);
    }
  };

  const applyFilter = (newOrientation: string) => {
    setOrientation(newOrientation);
    setPage(1);
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100">
      {/* Premium Sticky Capsule Navbar */}
      <div className="sticky top-4 z-50 flex justify-center px-4 mb-5">
        <div className="backdrop-blur-xl bg-white/80 shadow-2xl rounded-2xl border border-white/30 px-6 py-3 flex items-center gap-12">
          {/* Brand Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10">
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-500 to-purple-600 rounded-xl blur-md opacity-70"></div>
              <div className="relative bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl w-10 h-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <path d="M20 9h-4" />
                  <path d="M8 9H4" />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-black tracking-tight bg-linear-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Auronix
            </span>
          </div>

          {/* Search Bar - Inline in Navbar for Premium Feel */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search wallpapers..."
                className="w-80 px-5 py-2.5 bg-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all text-sm"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                onKeyUp={(event) => event.key === "Enter" && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-5 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md hover:shadow-xl text-sm font-medium"
            >
              Search
            </button>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="px-4 py-2.5 bg-gray-800/90 backdrop-blur-sm text-white rounded-xl hover:bg-gray-700 transition-all flex items-center gap-2 text-sm font-medium"
            >
            <Settings size={18} />    
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-8 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Subtle Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
           Discover Excellence
          </h2>
        </div>

        {/* Wallpaper Grid OR Shimmer Effect */}
        {isLoading ? (
          
          // 1. Sliding Shimmer Effect
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div 
                key={index} 
                // Parent dabba: relative aur overflow-hidden zaroori hai taaki wave bahar na nikle
                className="w-full h-64 bg-gray-200 rounded-2xl shadow-xl relative overflow-hidden"
              >
                {/* Yeh andar ka chamakta parda hai jo slide karega */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
              </div>
            ))}
          </div>

        ) : (

          // 2. Tera Asli Premium Grid (Tere exact code ko yahan safe rakha hai)
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {wallpapers.map((wallpaper: any) => (
              <div
                key={wallpaper.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl bg-white transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="relative overflow-hidden h-64 w-full">
                  <img
                    src={wallpaper.urls.regular}
                    alt={wallpaper.alt_description}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={wallpaper.urls.full}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-white/95 text-indigo-700 font-semibold rounded-xl  hover:text-black  transition-all duration-300 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

        )}

        {/* Pagination */}
        <div className="flex justify-center gap-5 mt-14">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-7 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl disabled:opacity-40 hover:bg-gray-50 hover:shadow-md transition-all font-medium flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          <div className="px-6 py-3 bg-indigo-50 text-indigo-700 font-bold rounded-xl shadow-inner">
            {page}
          </div>
          <button
            onClick={() => {
              setPage(page + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-7 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md hover:shadow-lg font-medium flex items-center gap-2"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Filter Modal Overlay */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}

      {/* Premium Filter Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md z-50 shadow-2xl transform transition-transform duration-500 ease-out rounded-l-2xl ${
          isFilterOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8 pb-3 border-b border-gray-100">
            <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Filters
            </h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all"
            >
             <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Orientation</p>
            <button
              onClick={() => applyFilter("")}
              className={`py-3 px-5 flex flex-row items-center gap-3 rounded-xl text-left font-medium transition-all ${
                orientation === ""
                  ? "bg-linear-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200 shadow-sm"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <LayoutGrid size={18} /> All Orientations
            </button>
            <button
              onClick={() => applyFilter("landscape")}
              className={`py-3 px-5 gap-3 rounded-xl text-left font-medium transition-all flex items-center justify-items-start ${
                orientation === "landscape"
                  ? "bg-linear-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200 shadow-sm"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Monitor size={18} /> Landscape
            </button>
            <button
              onClick={() => applyFilter("portrait")}
              className={`py-3 px-5 gap-3 rounded-xl text-left font-medium transition-all flex items-center justify-items-start ${
                orientation === "portrait"
                  ? "bg-linear-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200 shadow-sm"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Smartphone size={18} /> Portrait
            </button>
            <button
              onClick={() => applyFilter("squarish")}
              className={`py-3 px-5 gap-3 rounded-xl text-left font-medium transition-all flex items-center justify-items-start ${
                orientation === "squarish"
                  ? "bg-linear-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200 shadow-sm"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Square size={18} /> Squarish
            </button>
          </div>

          <div className="mt-auto pt-8">
            <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Powered by Unsplash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}