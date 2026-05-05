import { useEffect, useState } from "react";
import type { carFetchType } from "../utils/global";
import { Edit2, Trash2, Calendar, IndianRupee, Fuel, CarFront } from "lucide-react";
import { useNavigate } from "react-router";
import { deleteCar } from "../Services/CarService";
import { toast } from "react-toastify";

export default function ViewCarPage() {
  const navigate = useNavigate();

  const [allCarList, setAllCarList] = useState<carFetchType[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeSegment, setActiveSegment] = useState("All");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [carPerPage, setCarPerPage] = useState(8);

  const uniqueSegments = [
    "All", ...Array.from(new Set(allCarList.map((car) => car.car_segment))),
  ];

  const filteredCars =
    activeSegment === "All"
      ? allCarList
      : allCarList.filter((car) => car.car_segment === activeSegment);

  // Pagination
  const indexOfLastCar = currentPage * carPerPage;
  const indexOfFirstCar = indexOfLastCar - carPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredCars.length / carPerPage);

  useEffect(() => {
    fetchAllCars();
  }, []);

  const fetchAllCars = async () => {
    try {
      const res = await fetch("http://localhost:3000/car");
      const allCarsData = await res.json();
      setAllCarList(allCarsData);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCar = async (id: string) => {
    try {
      const isSuccess = await deleteCar(id);

      if (isSuccess) {
        toast.success("Car deleted successfully!");
        setTimeout(() => {
          fetchAllCars();
        }, 500);
      } else {
        console.log("Car Deletion Failed.!");
        toast.error("Car Deletion Failed.!");
      }
    } catch (error) {
      console.log("Server Error");
      toast.error("Server error! Could not delete the car.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Car Collection
            </h1>
            <p className="text-slate-500 text-lg">
              Manage and view all premium cars in your inventory
            </p>
            <div className="mt-1 flex justify-center">
              <div className="mx-auto h-0.5 w-5/5 sm:w-3/5 md:w-4/5 bg-linear-to-r from-transparent via-indigo-500 to-transparent mt-4 sm:mt-5"></div>
            </div>
          </div>

          {!loading && allCarList.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              {/* SEGMENT BUTTONS */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {uniqueSegments.map((segment, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveSegment(segment);
                      setCurrentPage(1);
                    }}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeSegment === segment
                        ? "bg-indigo-600 text-white shadow-md scale-105"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50"
                    }`}
                  >
                    {segment}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3">
                
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-sm border border-slate-200/60 text-sm font-semibold text-slate-700">
                  <span>Show:</span>
                  <select
                    value={carPerPage}
                    onChange={(event) => {
                      setCarPerPage(Number(event.target.value));
                      setCurrentPage(1);
                    }}
                    className="bg-transparent text-indigo-600 font-bold outline-none cursor-pointer"
                  >
                    <option value={4}>4 Cars</option>
                    <option value={8}>8 Cars</option>
                    <option value={12}>12 Cars</option>
                    <option value={16}>16 Cars</option>
                  </select>
                </div>

                {/* TOTAL CARS BADGE */}
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-slate-200/60 text-sm font-semibold text-slate-700">
                  <CarFront className="w-5 h-5 text-indigo-600" />
                  Total:{" "}
                  <span className="text-indigo-600 font-bold text-base">
                    {filteredCars.length}
                  </span>
                </div>
                
              </div>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : allCarList.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
              <CarFront className="w-20 h-20 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-700">
                No Cars Found
              </h3>
              <p className="text-slate-500 mt-2">
                Add some cars to see them here.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {currentCars.map((car, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col"
                  >
                    <div className="relative h-56 bg-slate-100 overflow-hidden group">
                      <img
                        src={car.car_image}
                        alt={car.car_name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-indigo-700 text-xs font-bold px-3 py-1 rounded-full shadow">
                          {car.car_segment}
                        </span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                          <Fuel className="w-3 h-3" />
                          <span className="capitalize">{car.car_fuel}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="mb-2">
                        <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1">
                          {car.car_brand}
                        </p>
                        <h3 className="text-xl font-bold text-slate-800 line-clamp-1">
                          {car.car_name}
                        </h3>
                      </div>

                      <div className="space-y-2 mt-4 mb-6 flex-1">
                        <div className="flex items-center text-slate-600 text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                          <span>
                            Mfg. Year:{" "}
                            <span className="font-semibold text-slate-700">
                              {car.car_manufacturing_year}
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center text-slate-600 text-sm">
                          <IndianRupee className="w-4 h-4 mr-2 text-slate-400" />
                          <span>
                            Price:{" "}
                            <span className="font-bold text-green-600 text-base">
                              ₹{Number(car.car_price).toLocaleString("en-IN")}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 mt-auto">
                        <button
                          onClick={() => {
                            navigate(`/editCar/${car.id}`);
                          }}
                          className="flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white py-2.5 rounded-xl font-medium transition-colors duration-200"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteCar(car.id)}
                          className="flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white py-2.5 rounded-xl font-medium transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 font-semibold hover:bg-indigo-50 hover:text-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    Previous
                  </button>

                  <div className="flex gap-1">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all duration-200 ${
                          currentPage === index + 1
                            ? "bg-indigo-600 text-white shadow-md scale-110"
                            : "bg-white border border-slate-200 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 font-semibold hover:bg-indigo-50 hover:text-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}