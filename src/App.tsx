import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import Services from './components/Services';
import Footer from './components/Footer';
import CarDetail from './pages/CarDetail';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Search from './pages/Search';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <Services />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;