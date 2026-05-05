import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { carType } from "../utils/global";

export default function CarDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [carData, setCarData] = useState<carType | null>(null);

  useEffect(() => {
    fetchSingleCar();
  }, [id]);

  const fetchSingleCar = async () => {
    try {
      const res = await fetch(`http://localhost:3000/car/${id}`);
      const data = await res.json();
      setCarData(data);
    } catch (error) {
      console.error("Error fetching single car:", error);
    }
  };

  if (!carData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-indigo-600 animate-pulse">
          Loading Details... 🐢
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-50 pt-10 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Modern Pill-Shaped Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="group mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-slate-700 font-bold text-sm rounded-full shadow-sm border border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md hover:border-indigo-200 transition-all duration-300 transform hover:-translate-x-1"
          >
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Inventory
          </button>

          {/* Premium Split Layout Card */}
          <div className="bg-white rounded-4xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
            {/* LEFT SIDE: Image Section */}
            <div className="w-full md:w-1/2 relative bg-slate-900">
              <div className="absolute top-6 left-6 z-10 bg-white/95 text-indigo-700 text-sm font-extrabold px-6 py-2 rounded-full shadow-lg tracking-widest uppercase">
                {carData.car_brand}
              </div>

              <img
                src={carData.car_image}
                alt={carData.car_name}
                className="w-full h-full object-cover min-h-87.5 md:min-h-full"
              />
            </div>

            {/* RIGHT SIDE: Details Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="uppercase tracking-widest text-xs font-extrabold text-indigo-500 mb-3">
                Premium Collection
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                {carData.car_name}
              </h1>

              {/* Price section */}
              <div className="mb-10 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
                <span className="text-4xl md:text-5xl font-extrabold text-indigo-600">
                  ₹{Number(carData.car_price).toLocaleString("en-IN")}
                </span>
                <span className="text-slate-500 font-medium text-lg">
                  Estimated Price
                </span>
              </div>

              {/* Divider line */}
              <div className="h-px w-full bg-slate-100 mb-10"></div>

              {/* Specifications Box */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-bold">
                    Mfg Year
                  </p>
                  <p className="text-2xl font-extrabold text-slate-800">
                    {carData.car_manufacturing_year}
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-bold">
                    Brand
                  </p>
                  <p className="text-2xl font-extrabold text-slate-800">
                    {carData.car_brand}
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-bold">
                    Fuel Type
                  </p>
                  <p className="text-2xl font-extrabold text-slate-800">
                    {carData.car_fuel}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button
                  onClick={() =>
                    alert("Test Drive booking system coming soon!")
                  }
                  className="flex-1 bg-indigo-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/40 transform hover:-translate-y-1"
                >
                  Book Test Drive
                </button>
                <button
                  onClick={() => alert("Opening contact form...")}
                  className="flex-1 bg-white text-indigo-600 border-2 border-indigo-100 font-bold py-4 px-6 rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
