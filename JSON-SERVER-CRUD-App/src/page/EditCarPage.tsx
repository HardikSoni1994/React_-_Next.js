import { useEffect, useState } from "react";
import { Car, Calendar, IndianRupee, Image as ImageIcon, LayoutDashboard, Gauge, Flame, Zap, Battery } from "lucide-react";
import type { carFetchType } from "../utils/global";
import {  useNavigate, useParams } from "react-router";
import { fetchSingleCar, updateCar } from "../Services/CarService";

export default function EditCarPage() {

  const { id } = useParams();
  const navigate = useNavigate();

    const [carData, setCarData] = useState<carFetchType>({
      id: "",
      car_brand: "",
      car_name: "",
      car_manufacturing_year: 0,
      car_price: 0,
      car_fuel: "",
      car_segment: "",
      car_image: "xyz"
    });

    const [errors, setErrors] = useState<{ [key:string]: string}>({});
    
  const carBrand = [ "Honda", "Toyota", "Ford", "BMW", "Mercedes-Benz", "Audi", "Hyundai", "Tata", "Mahindra", "Skoda", "Volkswagen", "Nissan", "Renault", "Jeep", "Fiat", "Volvo", "Kia", "Jaguar", "Land Rover", "Bentley", "Porsche" ];

  const carSegment = [ "MUV", "SUV", "Sedan", "Hatchback", "Compact Hatchback", "Coupe", "Luxury", "Convertible" ];

  const carFuelTypes = [
    { value: "petrol", label: "Petrol", icon: Flame, color: "text-orange-500" },
    { value: "diesel", label: "Diesel", icon: Gauge, color: "text-blue-500" },
    { value: "electric", label: "Electric", icon: Battery, color: "text-green-500" },
    { value: "cng", label: "CNG", icon: Zap, color: "text-purple-500" },
  ];

  const labelClasses = "block text-sm font-semibold text-slate-700";
  const inputClasses = "block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-900 placeholder-slate-400";
  const selectClasses = "block w-full pl-3 pr-10 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-900 appearance-none bg-white";

  useEffect(() => {
  if (id) {
    getSingleCarData()
  }
  }, [id]);

  async function getSingleCarData() {
      const data = await fetchSingleCar( id || "");
      setCarData(data);
  }


  const onHandleChange = (event: any) => {
    const {name, value} = event.target;

    setCarData(prev => ({ ...prev, [name]: (name === 'car_price' || name === 'car_manufacturing_year') ? Number(value) : value }))
  }

 const validateForm = () => {
  let newErrors: { [key:string]: string} = {};
  let isValid = true;

  // Check Car Brand
  if (!carData.car_brand || carData.car_brand === "select" || carData.car_brand.trim() === "") {
    newErrors.car_brand = "Please select a car brand.";
    isValid = false;
  }

  // Check Car Name
  if (!carData.car_name || carData.car_name.trim() === "") {
    newErrors.car_name = "Car name is required.";
    isValid = false;
  }

  // Check Car Manufacturing Year 
  const currentYear = new Date().getFullYear();
  if (!carData.car_manufacturing_year || carData.car_manufacturing_year < 1886 || carData.car_manufacturing_year > currentYear) {
    newErrors.car_manufacturing_year = `Year must be between 1886 and ${currentYear}.`;
    isValid = false;
  }

    // Check Car Price
  if (!carData.car_price || carData.car_price <= 0) {
    newErrors.car_price = "Price must be a valid number greater than 0.";
    isValid = false;
  }

  // RADIO / CUSTOM SELECT Validation (Car Fuel)
  if (!carData.car_fuel || carData.car_fuel.trim() === "") {
    newErrors.car_fuel = "Please select a fuel type.";
    isValid = false;
  }

  // SELECT Dropdown Validation (Car Segment)
  if (!carData.car_segment || carData.car_segment === "select" || carData.car_segment.trim() === "") {
    newErrors.car_segment = "Please select a car segment.";
    isValid = false;
  }

  // Car Image Error validation
  if (!carData.car_image || carData.car_image.trim() === "") {
    newErrors.car_image = "Please upload a car image.";
    isValid = false;
  }
  setErrors(newErrors);
  return isValid;
 };


  const onHandleSubmit = async (event: any) => {
    event.preventDefault();
    
    if (validateForm()) {
    console.log("Validation Successful! Car Data :", carData);

    const status = await updateCar(carData)
      if(status) {
        navigate('/viewCar');
      }
    } else {
      console.log("Form Validation Failed.!");
      return;
    }
  }

  return <>
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-5">
            <Car className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Update Car Details
          </h1>
          <p className="mt-2 text-slate-500">
            Fill in the details to add a new car to your inventory
          </p>
          {/* Gradient Line */}
            <div className="mx-auto h-0.5 w-5/5 sm:w-3/5 md:w-4/5 bg-linear-to-r from-transparent via-indigo-500 to-transparent mt-4 sm:mt-5"></div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="px-6 py-8 sm:p-10">
            <form className="space-y-8" onSubmit={onHandleSubmit} >
              {/* Car Brand & Car Name */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className= {labelClasses}>
                    Car Brand <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Car className="h-5 w-5 text-slate-400" />
                    </div>
                    <select
                      name="car_brand"
                      onChange={onHandleChange}
                      value={carData.car_brand}
                      className= {`${selectClasses} ${errors.car_brand ? 'border-red-500 focus:ring-red-500' : ''} `}  >
                      <option value="select">Select Brand</option>
                      {carBrand.map((brand, index) => (
                        <option key={index} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                    {errors.car_brand && <p className="text-red-500 text-xs mt-1 font-medium">{errors.car_brand}</p>}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className= {labelClasses}>
                    Car Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Car className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="e.g., City, Corolla, X5"
                      name="car_name"
                      value={carData.car_name}
                      onChange={onHandleChange}
                      className= {`${inputClasses} ${errors.car_name ? 'border-red-500 focus:ring-red-500' : ''}`} />
                      {errors.car_name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.car_name}</p>}
                  </div>
                </div>
              </div>

              {/* Manufacturing Year & Price */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className= {labelClasses}>
                    Manufacturing Year <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="number"
                      placeholder="e.g., 2024"
                      name="car_manufacturing_year"
                      value={carData.car_manufacturing_year}
                      onChange={onHandleChange}
                      className= {`${inputClasses} ${errors.car_manufacturing_year ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.car_manufacturing_year && <p className="text-red-500 text-xs mt-1 font-medium">{errors.car_manufacturing_year}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className= {labelClasses}>
                    Car Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <IndianRupee className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="number"
                      placeholder="e.g., 1500000"
                      name="car_price"
                      value={carData.car_price}
                      onChange={onHandleChange}
                      className= {`${inputClasses} ${errors.car_price ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.car_price && <p className="text-red-500 text-xs mt-1 font-medium">{errors.car_price}</p>}
                  </div>
                </div>
              </div>

              {/* Car Fuel - Radio Buttons with Icons */}
              <div className="space-y-3">
                <label className= {labelClasses}>
                  Car Fuel <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {carFuelTypes.map((fuel) => (
                    <label
                      key={fuel.value}
                      className={`relative flex cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 ${
                        carData.car_fuel === fuel.value
                          ? "border-indigo-500 bg-indigo-50"
                          : "border-slate-200 hover:border-indigo-200 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="car_fuel"
                        value={fuel.value}
                        checked={carData.car_fuel === fuel.value}
                        onChange={(event) => {
                          setCarData(prev => ({ ...prev, car_fuel: event.target.value }))
                        }}
                        className="sr-only"
                      />
                      <div className="flex flex-col items-center gap-2 w-full">
                        <fuel.icon
                          className={`h-6 w-6 ${fuel.color} ${carData.car_fuel === fuel.value ? "scale-110" : ""} transition-transform duration-200`}
                        />
                        <span
                          className={`text-sm font-medium ${carData.car_fuel === fuel.value ? "text-indigo-600" : "text-slate-600"}`}
                        >
                          {fuel.label}
                        </span>
                      </div>
                      {carData.car_fuel === fuel.value && (
                        <div className="absolute top-2 right-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        </div>
                      )}
                    </label>
                  ))}
                </div>
                {errors.car_fuel && <p className="text-red-500 text-xs mt-1 font-medium">{errors.car_fuel}</p>}
              </div>

              {/* Car Segment & Car Image */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className= {labelClasses}>
                    Car Segment <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LayoutDashboard className="h-5 w-5 text-slate-400" />
                    </div>
                    <select
                      name="car_segment"
                      value={carData.car_segment}
                      onChange={onHandleChange}
                      className= {`${selectClasses} ${errors.car_segment ? 'border-red-500 focus:ring-red-500' : ''}`}
                    >
                      <option value="select">Select Segment</option>
                      {carSegment.map((segment, index) => (
                        <option key={index} value={segment}>
                          {segment}
                        </option>
                      ))}
                    </select>
                    {errors.car_segment && <p className="text-red-500 text-xs mt-1 font-medium">{errors.car_segment}</p>}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className= {labelClasses}>
                    Car Image URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ImageIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="https://example.com/car-image.jpg"
                      name="car_image"
                      value={carData.car_image}
                      onChange={onHandleChange}
                      className= {`${inputClasses} ${errors.car_image ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    <img src={carData.car_image} width={200} height={200} alt="" />
                    {errors.car_image && <p className="text-red-500 text-xs mt-1 font-medium">{errors.car_image}</p>}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-linear-to-r from-yellow-400 to-yellow-600 hover:from-yellow-700 hover:to-yellow-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Update Car
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/viewCar')}
                  className="w-full sm:w-auto px-8 py-3.5 text-white bg-indigo-600 border border-slate-300 hover:bg-indigo-700 hover:border-slate-400 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
              
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Fill all the required fields marked with{" "}
            <span className="text-red-500">*</span>
          </p>
        </div>
        {/* Gradient Line */}
        <div className="mx-auto h-0.5 w-5/5 sm:w-3/5 md:w-4/5 bg-linear-to-r from-transparent via-indigo-500 to-transparent mt-4 sm:mt-5"></div>
      </div>
    </div>
  </>
}
