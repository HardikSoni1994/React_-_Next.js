import { useNavigate } from "react-router"

export default function NotFoundPage() {
    const navigate = useNavigate()
    return <>
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-center text-indigo-600 text-8xl sm:text-9xl font-bold">404</h1>
        <h2 className="text-center text-indigo-500 text-2xl sm:text-3xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-center text-slate-500 text-lg sm:text-xl mt-2">The page you are looking for does not exist.</p>
        
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => {
                navigate("/")
            }}
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Go Back Home</span>
          </button>
        </div>
      </div>
    </div>
    </>
}