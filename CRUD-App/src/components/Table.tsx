import { useEffect, useState } from "react";
import type { studentType } from "../utils/global";

type propsType = {
    allStudents: studentType[];
    deleteStudent: (index: number) => void;
    updateStudent: (index: number) => void;
};

export default function Table({ allStudents, deleteStudent, updateStudent }: propsType) {
    const [numberOfCity, setNumberOfCity] = useState<number>(0);
    const [search, setSearch] = useState<string>("");
    const [totalMale, setTotalMale] = useState<number>(0);
    const [totalFemale, setTotalFemale] = useState<number>(0);

    useEffect(() => {
        let allCity: any;
        allCity = allStudents.map((student) => {
            return student.city;
        });
        allCity = new Set([...allCity]);
        setNumberOfCity(allCity.size);

        const maleCount = allStudents.filter((student) => student.gender === "male").length;
        const femaleCount = allStudents.filter((student) => student.gender === "female").length;
        setTotalMale(maleCount);
        setTotalFemale(femaleCount);
    }, [allStudents]);

    const filteredStudents = allStudents.filter((student) => {
        return (
            student.firstName.toLowerCase().includes(search.toLowerCase()) ||
            student.lastName.toLowerCase().includes(search.toLowerCase()) ||
            student.email.toLowerCase().includes(search.toLowerCase()) ||
            student.phone.includes(search) ||
            student.city.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section - Centered */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-5">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        Student Management
                    </h1>
                    <p className="mt-3 text-slate-500 text-lg">Manage and view all registered students</p>
                    <div className="mx-auto h-0.5 w-4/5 sm:w-5/5 bg-linear-to-r from-transparent via-indigo-600/70 to-transparent mt-1 sm:mt-3 md:mt-5 mb-6 sm:mb-8 md:mb-10"></div>
                </div>

                {/* Stats Cards - Centered Grid with Unique Design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Total Students Card */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative bg-white rounded-2xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-2xl mb-4">
                                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <p className="text-3xl font-bold text-slate-800">{allStudents.length}</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Total Students</p>
                            <div className="mx-auto h-0.5 w-4/5 sm:w-5/5 bg-linear-to-r from-transparent via-indigo-600/70 to-transparent mt-1 sm:mt-3 md:mt-5 mb-0 sm:mb-0 md:mb-0"></div>
                        </div>
                    </div>

                    {/* Total Male Card */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative bg-white rounded-2xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl mb-4">
                                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <p className="text-3xl font-bold text-slate-800">{totalMale}</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Total Male</p>
                            <div className="mx-auto h-0.5 w-4/5 sm:w-5/5 bg-linear-to-r from-transparent via-blue-600/70 to-transparent mt-1 sm:mt-3 md:mt-5 mb-0 sm:mb-0 md:mb-0"></div>
                        </div>
                    </div>

                    {/* Total Female Card */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-300 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative bg-white rounded-2xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-100 rounded-2xl mb-4">
                                <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <p className="text-3xl font-bold text-slate-800">{totalFemale}</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Total Female</p>
                            <div className="mx-auto h-0.5 w-4/5 sm:w-5/5 bg-linear-to-r from-transparent via-pink-600/70 to-transparent mt-1 sm:mt-3 md:mt-5 mb-0 sm:mb-0 md:mb-0"></div>
                        </div>
                    </div>

                    {/* Total Cities Card */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative bg-white rounded-2xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-2xl mb-4">
                                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <p className="text-3xl font-bold text-slate-800">{numberOfCity}</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Total Cities</p>
                            <div className="mx-auto h-0.5 w-4/5 sm:w-5/5 bg-linear-to-r from-transparent via-purple-600/70 to-transparent mt-1 sm:mt-3 md:mt-5 mb-0 sm:mb-0 md:mb-0"></div>
                        </div>
                    </div>
                </div>

                {/* Search Bar - Centered with Proper Alignment */}
                <div className="max-w-2xl mx-auto mb-10">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder=" Search by name, email, phone, or city..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="block w-full pl-12 pr-5 py-4 border-0 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-slate-900 placeholder-slate-400 bg-white"
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch("")}
                                    className="absolute inset-y-0 right-0 pr-5 flex items-center"
                                >
                                    <svg className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Professional Table Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-0">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead>
                                <tr className="bg-gradient-to-r from-slate-800 to-slate-700">
                                    <th className="px-6 py-5 text-left text-xs font-bold text-white uppercase tracking-wider">#</th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            First Name
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Last Name
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Email
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            Phone
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Gender
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                            City
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Address
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 text-center text-xs font-bold text-white uppercase tracking-wider">
                                        <div className="flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Actions
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100">
                                {filteredStudents.length === 0 ? (
                                    <tr>
                                        <td colSpan={9} className="px-6 py-20 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <svg className="w-20 h-20 text-slate-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-slate-500 font-medium text-lg">No students found</p>
                                                <p className="text-slate-400 text-sm mt-2">Try adjusting your search criteria</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredStudents.map((student, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50 transition-all duration-200 group">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-indigo-600">{idx + 1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-semibold text-slate-800">{student.firstName}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-slate-600">{student.lastName}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-slate-600">{student.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-slate-600 font-mono">{student.phone}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-bold capitalize shadow-sm
                                                    ${student.gender === 'male' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 
                                                      student.gender === 'female' ? 'bg-pink-50 text-pink-700 border border-pink-200' : 
                                                      'bg-gray-50 text-gray-700 border border-gray-200'}`}>
                                                    {student.gender === 'male' ? '👨 Male' : student.gender === 'female' ? '👩 Female' : '👤 Other'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                                                    📍 {student.city}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-slate-600 max-w-xs truncate" title={student.address}>
                                                    {student.address}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => updateStudent(idx)}
                                                        className="p-2 text-indigo-600 hover:text-white hover:bg-indigo-600 rounded-xl transition-all duration-200"
                                                        title="Edit Student"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => deleteStudent(idx)}
                                                        className="p-2 text-red-600 hover:text-white hover:bg-red-600 rounded-xl transition-all duration-200"
                                                        title="Delete Student"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer */}
                    {filteredStudents.length > 0 && (
                        <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-white border-t border-slate-200">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <p className="text-sm text-slate-600">
                                            Showing <span className="font-bold text-slate-800">{filteredStudents.length}</span> of{" "}
                                            <span className="font-bold text-slate-800">{allStudents.length}</span> students
                                        </p>
                                    </div>
                                    <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>
                                    <div className="flex gap-3">
                                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">👨 Male: {totalMale}</span>
                                        <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded-lg">👩 Female: {totalFemale}</span>
                                    </div>
                                </div>
                                {search && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full font-medium">
                                            🔍 Filtered by: "{search}"
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}