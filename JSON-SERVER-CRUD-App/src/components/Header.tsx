import { NavLink } from "react-router";
import LogoImg from "../assets/Zyphron.png";

export default function Header() {
    return <>
    {/* Header */}
      <header className="bg-white shadow-md border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img 
              src={LogoImg} 
              alt="Zyphron Motors Logo" 
              className="w-14 h-13 object-contain scale-3d ml-2" 
            />
              <span className="text-xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Zyphron Motors
              </span>
            </div>

            
            <ul className="flex items-center gap-1 sm:gap-2">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `inline-flex items-center px-3 py-2 text-sm font-medium ${isActive ? "text-indigo-600 bg-indigo-50" : "text-slate-600"} hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200`}>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/addCar" 
                  className={({ isActive }) => `inline-flex items-center px-3 py-2 text-sm font-medium ${isActive ? "text-indigo-600 bg-indigo-50" : "text-slate-600"} hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200`}>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Add Car
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/viewCar" 
                  className={({ isActive }) => `inline-flex items-center px-3 py-2 text-sm font-medium ${isActive ? "text-indigo-600 bg-indigo-50" : "text-slate-600"} hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200`}>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  View Car
                </NavLink>
              </li>
            </ul>

            {/* User Profile Icon */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <span className="text-white text-sm font-semibold">HS</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
}