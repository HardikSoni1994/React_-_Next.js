import { useEffect, useState } from "react";
import { useNavigate } from "react-router"; 
import type { carFetchType } from "../utils/global";

export default function HomePage() {
  const [featuredCars, setFeaturedCars] = useState<carFetchType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopCars();
  }, []);

  const fetchTopCars = async () => {
    try {
      const res = await fetch("http://localhost:3000/car");
      const allCarsData = await res.json();

      const topCars = allCarsData.slice(0, 10);

      setFeaturedCars(topCars);
      
      console.log("Top 10 Cars:", topCars);

    } catch (error) {
      console.error("Error fetching top cars:", error);
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* --- HERO SECTION --- */}  
      <div 
        className="relative text-white py-28 px-4 text-center shadow-2xl"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Find Your Dream Car Today
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-gray-300 mb-10 max-w-2xl text-center drop-shadow-sm leading-relaxed">
            Welcome to <span className="font-semibold text-white">Zyphron Motors</span>. 
            Explore our exclusive collection of premium vehicles.
          </p>
          
          <button 
            onClick={() => navigate('/viewCar')}
            className="group relative overflow-hidden bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-indigo-500 transform hover:-translate-y-1"
          >
            {/* Button Text */}
            <span className="relative z-10">Browse All Inventory</span>
            
            {/* Glass Sliding Effect */}
            <div className="absolute top-0 -left-full h-full w-15 skew-x-25 bg-white opacity-20 group-hover:left-[120%] transition-all duration-700 ease-out z-0"></div>
          </button>

        </div>
      </div>

      {/* --- COMPACT CARDS SECTION --- */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center">Featured Collection</h2>

        {/* Gradient Line */}
        <div className="mx-auto h-0.5 w-full sm:w-3/5 md:w-2/5 bg-linear-to-r from-transparent via-indigo-500 to-transparent mt-4 mb-10"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {featuredCars.map((car, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col group">
              
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img src={car.car_image} alt={car.car_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <span className="absolute top-3 left-3 bg-white/95 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {car.car_brand}
                </span>
              </div>

              <div className="p-5 grow flex flex-col">
                <h3 className="text-lg font-bold text-slate-800 line-clamp-1">{car.car_name}</h3>
                
                <div className="mt-1.5 text-xs text-slate-500 flex gap-3">
                  <span className="flex items-center gap-1">📅 {car.car_manufacturing_year}</span>
                </div>
                
                <div className="mt-3 mb-4">
                  <span className="text-xl font-extrabold text-slate-900">₹{car.car_price}</span>
                </div>

                <button 
                  onClick={() => navigate(`/carDetails/${car.id}`)}
                  className="mt-auto w-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium py-2.5 rounded-lg transition-colors duration-200 text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      
    </div>
  );
  
}