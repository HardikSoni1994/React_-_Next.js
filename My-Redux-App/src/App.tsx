import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "./app/store"
import { decrement, increment, reset, incrementByAmount, decrementByAmount } from "./features/counter/counterSlice";

export default function App() {
  const counter = useSelector((state: RootState) => state.counterReducer.counter)
  const dispatch = useDispatch();

  return <>
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="ml-2 text-xl font-semibold text-gray-800">Redux Counter</span>
            </div>
            <div className="flex space-x-4">
              <span className="text-sm text-gray-500">Redux Toolkit</span>
              <span className="text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-500">React 18</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Redux App
            </h1>
            <p className="text-gray-600 text-lg">Simple counter application with Redux state management</p>
          </div>

          {/* Counter Card */}
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-linear-to-r from-indigo-500 to-purple-600 px-6 py-4">
              <h2 className="text-white text-lg font-semibold">Current Counter Value</h2>
            </div>
            <div className="px-6 py-8">
              <div className="text-7xl md:text-8xl font-bold text-gray-800 mb-4">
                {counter}
              </div>
              <div className="text-sm text-gray-500">
                {counter === 0 && "Neutral state"}
                {counter > 0 && `Positive value (${counter})`}
                {counter < 0 && `Negative value (${Math.abs(counter)})`}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={() => dispatch(increment())} 
              className="group relative flex-1 bg-linear-to-r from-green-500 to-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Increment
              </span>
            </button>
            
            <button 
              onClick={() => dispatch(decrement())} 
              className="group relative flex-1 bg-linear-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                Decrement
              </span>
            </button>
            
            <button 
              onClick={() => dispatch(reset())} 
              className="group relative flex-1 bg-linear-to-r from-yellow-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
              </span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => dispatch(increment())} 
                className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors"
              >
                +1
              </button>
              <button 
                onClick={() => {
                  dispatch(incrementByAmount(5))
                }} 
                className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors"
              >
                +5
              </button>
              <button 
                onClick={() => {
                  dispatch(incrementByAmount(10))
                }} 
                className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors"
              >
                +10
              </button>
              <button 
                onClick={() => {
                  dispatch(decrementByAmount(5))
                }} 
                className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
              >
                -5
              </button>
              <button 
                onClick={() => {
                  dispatch(decrementByAmount(10))
                }} 
                className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
              >
                -10
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">Quick increment/decrement actions</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            Built with React, Redux Toolkit, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  </>
}