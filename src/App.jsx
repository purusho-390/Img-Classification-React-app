import React, { useState } from 'react'; // Ensure useState is imported
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Detection from './Components/Detection';
import Teams from './Components/Teams';
import Diagnosis from './Components/Diagnosis';
import './App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-indigo-400 font-bold text-2xl md:text-3xl">
          <Link to="/">PK-AI-SUITE</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-indigo-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div >
        
        <ul className={`md:flex space-x-8  text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link
              to="/"
              className="hover:text-indigo-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Detection"
              className="hover:text-indigo-300 transition duration-300"
            >
              Detection
            </Link>
          </li>
          <li>
            <Link
              to="/Diagnosis"
              className="hover:text-indigo-300 transition duration-300"
            >
              Diagnosis
            </Link>
          </li>
          <li>
            <Link
              to="/Teams"
              className="hover:text-indigo-300 transition duration-300"
            >
              Teams
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="hero bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-indigo-400 mb-4">
          Parkinson Disease Detection using Deep Learning
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
          Empowering healthcare with cutting-edge AI technology to detect and
          diagnose Parkinson's Disease.
        </p>
        <Link
          to="/Detection"
          className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 sm:px-8 rounded-lg shadow-lg text-lg sm:text-xl transition-all duration-300 ease-in-out"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detection" element={<Detection />} />
          <Route path="/Diagnosis" element={<Diagnosis />} />
          <Route path="/Teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
