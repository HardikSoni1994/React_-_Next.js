import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodGallery from "./components/FoodGallery";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services"
import Feedback from "./components/Feedback"
import OrderNow from "./components/OrderNow"
import Team from "./components/Team";
import BookTable from "./components/BookTable";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[oklch(0.3123_0.026_301.24)] font-sans text-white relative overflow-hidden">
      <div id="scroll-detector" className="absolute top-10 w-full h-1 invisible pointer-events-none"></div>
      <div className="absolute top-[100px] md:top-[150px] left-[65%] -translate-x-1/2 w-[700px] h-[500px] bg-[#7c3aed]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* 3. Navbar hamesha glow ke upar */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FoodGallery />
        <AboutUs />
        <Services />
        <Feedback />
        <OrderNow />
        <Team />
        <BookTable />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
