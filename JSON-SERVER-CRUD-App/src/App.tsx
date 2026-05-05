import { Outlet } from "react-router";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Header/>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-semibold text-indigo-600">
              © {new Date().getFullYear()} <strong>Zyphron Motors</strong>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <ToastContainer />
    </>
  );
}