import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import type { studentType } from "../utils/global";

type propsType = {
  allStudents: studentType[];
  setAllStudents: (value: React.SetStateAction<studentType[]>) => void;
  editStudent: studentType | undefined;
  editIndex: number | null;
  setEditIndex: (value: React.SetStateAction<number | null>) => void;
}

export default function Form({ allStudents, setAllStudents, editStudent, editIndex, setEditIndex}: propsType) {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    const [error, setError] = useState<any>({});

    // const [studentData, setStudentData] = useState({ firstName: "", lastName: "", email: "email", phone: "", gender: "", city: "", address: "" });

    const allCity = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Banglore", "Pune", "Hydrabad", "Ahmedabad", "Chandigarh", "Jaipur", "Lacknow", "Indore", "Nagpur", "Surat"];

    useEffect(() => {
      localStorage.setItem("students", JSON.stringify(allStudents));
    }, [allStudents]);

    useEffect(() => {
      if(editStudent) {
        setFirstName(editStudent.firstName);
        setLastName(editStudent.lastName);
        setEmail(editStudent.email);
        setPhone(editStudent.phone);
        setGender(editStudent.gender);
        setCity(editStudent.city);
        setAddress(editStudent.address);
      }
    }, [editStudent]);

    const validation = () => {
      let newError: any = {};

      if (!firstName) {
        newError.firstName = "First Name is Required..";
      }
      if (!lastName) {
        newError.lastName = "Last Name is Required..";
      }

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if(!email) {
        newError.email = "Email is Required..";
      }else if (!emailPattern.test(email)) {
        newError.email = "Please enter valid email..";
      }

      const phonePattern = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

      if (!phone) {
        newError.phone = "Phone Number is Required..";
      } else if (phone.length !== 10 || !phonePattern.test(phone)) {
        newError.phone = "Please enter valid Phone Number..";
      }

      if (!gender) {
        newError.gender = "Gender is Required..";
      }

      if (!city) {
        newError.city = "City is Required..";
      }

      if (!address) {
        newError.address = "Address is Required..";
      }

      setError(newError);
      return Object.keys(newError).length;
    };

   const studentFormSubmit = (event: any) => {
    event.preventDefault() // Event

    if (!validation()) {
      return;
    }

    const studentData: studentType = {
      firstName,
      lastName,
      email,
      phone,
      gender,
      city,
      address
    };

    if (editIndex !== null) {
      let updateStudent = [...allStudents];
      updateStudent[editIndex] = studentData;
      setAllStudents(updateStudent);

      setEditIndex(null);
      toast.success("Student updated successfully..");

    }else {
      setAllStudents([...allStudents, studentData]);
      toast.success("Student added successfully..");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setGender("");
    setCity("");
    setAddress("");
    setError({});
   };

  return <>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-xl mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-indigo-500 tracking-tight">{editIndex !== null ? "Update Student Form" : "Student Registration Form"}</h1>
          <p className="mt-2 text-slate-500">Please fill in the student details below</p>
          {/* Gradient Line */}
      <div className="mx-auto h-0.5 w-4/5 sm:w-5/5 bg-linear-to-r from-transparent via-indigo-600/70 to-transparent mt-1 sm:mt-3 md:mt-5 mb-6 sm:mb-8 md:mb-10"></div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-500">
          <div className="px-6 py-2 sm:p-10">
            <form className="space-y-8" onSubmit={studentFormSubmit}>
              {/* Row: First Name & Last Name */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      placeholder="Enter first name"
                      className={`block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-900 placeholder-slate-400 ${error.firstName ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                    />
                    {error.firstName && <p className="mt-1 text-sm text-red-500">{error.firstName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      placeholder="Enter last name"
                      className={`block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-900 placeholder-slate-400 ${error.lastName ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                    />
                    {error.lastName && <p className="mt-1 text-sm text-red-500">{error.lastName}</p>}
                  </div>
                </div>
              </div>

              {/* Row: Email & Phone */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="student@example.com"
                      className={`block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-900 placeholder-slate-400 ${error.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                    />
                    {error.email && <p className="mt-1 text-sm text-red-500">{error.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="+91 9876543210"
                      className={`block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-900 placeholder-slate-400 ${error.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                    />
                    {error.phone && <p className="mt-1 text-sm text-red-500">{error.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Gender Section */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-6">
                  <label className="inline-flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      id="gender-male"
                      name="gender"
                      value="male"
                      checked={(gender == "male") ? true : false}
                      onChange={(event) => setGender(event.target.value)}
                      className={`w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded-full transition-all ${error.gender ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                    />
                    <span className="ml-3 text-slate-700 group-hover:text-indigo-600 transition-colors">Male</span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      id="gender-female"
                      name="gender"
                      value="female"
                       checked={(gender == "female") ? true : false}
                      onChange={(event) => setGender(event.target.value)}
                      className={`w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded-full transition-all ${error.gender ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                    />
                    <span className="ml-3 text-slate-700 group-hover:text-indigo-600 transition-colors">Female</span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      id="gender-other"
                      name="gender"
                      value="other"
                      checked={(gender == "other") ? true : false}
                      onChange={(event) => setGender(event.target.value)}
                      className={`w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded-full transition-all ${error.gender ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                    />
                    <span className="ml-3 text-slate-700 group-hover:text-indigo-600 transition-colors">Other</span>
                  </label>
                </div>
                {error.gender && <p className="mt-1 text-sm text-red-500">{error.gender}</p>}
              </div>

              {/* City Select */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className={`block w-full pl-4 pr-10 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-900 appearance-none bg-white ${error.city ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}>
                    <option value="select">Select your city</option>
                   {allCity.map((myCity, index) => {
                    return <option key={index} value={myCity}>{myCity}</option>
                   })}
                  </select>
                  {error.city && <p className="mt-1 text-sm text-red-500">{error.city}</p>}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Address Textarea */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="address"
                    rows={4}
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    placeholder="Enter complete address"
                    className={`block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-900 placeholder-slate-400 resize-y ${error.address ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                  ></textarea>
                  {error.address && <p className="mt-1 text-sm text-red-500">{error.address}</p>}
                </div>
                <p className="text-xs text-slate-400 mt-1">Please provide a complete address with landmark if any</p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group`}
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  {editIndex !== null ? "Update Student" : "Add Student"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-400">
            By submitting this form, you agree to our <a href="#" className="text-indigo-500 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-500 hover:underline">Privacy Policy</a>
          </p>
          {/* Gradient Line */}
      <div className="mx-auto h-0.5 w-4/5 sm:w-5/5 bg-linear-to-r from-transparent via-indigo-600/70 to-transparent mt-0 sm:mt-2 md:mt-4 mb-6 sm:mb-8 md:mb-10"></div>
        </div>
      </div>
    </div>
  </>
}